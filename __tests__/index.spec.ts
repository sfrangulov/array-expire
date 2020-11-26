import ArrayExpire from "../src";

describe("ArrayExpire", () => {
  it("length is equal 1", () => {
    const arr = new ArrayExpire(1000);
    arr.push(1);
    expect(arr.length).toEqual(1);
  });

  it("length is equal 0 after 1 sec", async() => {
    const arr = new ArrayExpire(1000);
    arr.push(1);
    await new Promise((r) => setTimeout(r, 1006));
    expect(arr.length).toEqual(0);
  });
});
