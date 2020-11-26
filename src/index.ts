/* eslint-disable @typescript-eslint/no-explicit-any */
"use strict";

const delay = 5;

export default class ArrayExpire extends Array {
  private timeout: number;
  private times = [];
  private nextGC;

  constructor(timeout: number) {
    super();
    if (!Number.isFinite(timeout)) throw new Error("Timeout must be a number");
    this.timeout = timeout;
  }

  scheduleGC(): void {
    if (this.nextGC) return;
    const ts = this.times.length
      ? this.times[0] - Date.now() + delay
      : this.timeout;
    this.nextGC = setTimeout(this.gc.bind(this), ts);
    if (this.nextGC.unref) this.nextGC.unref();
  }

  gc(): void {
    const now = Date.now();
    while (this.times.length && this.times[0] < now) {
      this.shift();
      this.times.shift();
    }
    this.nextGC = null;
    this.scheduleGC();
  }

  push(...items: any[]): number {
    if (!this.times.length) this.scheduleGC();
    const time = Date.now() + this.timeout;
    items.forEach(() => {
      this.times.push(time);
    });
    return super.push(...items);
  }

  pop(): any {
    if (!this.times.length && this.nextGC) {
      clearTimeout(this.nextGC);
      this.nextGC = null;
    }
    this.times.pop();
    return super.pop();
  }

  shift(): any {
    if (this.nextGC) {
      clearTimeout(this.nextGC);
      this.nextGC = null;
    }
    this.scheduleGC();
    this.times.shift();
    return super.shift();
  }
}
