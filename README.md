<h1 align="center" style="border-bottom: none;">⚒️ array-expire</h1>

<h3 align="center">An array that removes each element after a given timeout.</h3>

<p align="center">
        <a href="./LICENSE">
    <img alt="license" src="https://img.shields.io/badge/license-ISC-blue.svg" />
  </a> <a href="https://requirejs.org/docs/commonjs.html">
      <img alt="commonjs module" src="https://img.shields.io/badge/module-CommonJS-blue" />
    </a> <a href="https://www.typescriptlang.org/">
    <img alt="typescript version" src="https://img.shields.io/npm/dependency-version/array-expire/dev/typescript.svg" />
  </a>
   <a href="https://www.npmjs.com/package/array-expire">
    <img alt="npm version" src="https://img.shields.io/npm/v/array-expire.svg?style=flat" />
  </a> <a href="https://www.npmjs.com/package/array-expire">
    <img alt="npm downloads" src="https://img.shields.io/npm/dt/array-expire.svg?style=flat" />
  </a>
    </p>

## Install
```
npm install --save array-expire
```

or

```
yarn install array-expire
```
  

## Import module
```js
const ArrayExpire = require('array-expire');
```
or
```js
import ArrayExpire from 'array-expire';
```
  

## Usage
```js
const ArreyExpire = require('array-expire')

const arr = new ArreyExpire(1000 * 10)

// Add elements to the array using .push()
arr.push(1)

// Retrive all elements from the array
console.log(JSON.stringify(arr)); // => [1]

setTimeout(() => {
    // after 5 seconds
    arr.push(2)
    console.log(JSON.stringify(arr)) // outputs: [1,2]
}, 1000 * 5)

setTimeout(() => {
    // after 11 seconds
    console.log(JSON.stringify(arr)) // outputs: [2]
}, 1000 * 11)

setTimeout(() => {
    // after 16 seconds
    console.log(JSON.stringify(arr)) // outputs: []
}, 1000 * 16)
```
  

## Build
```
npm run build // for single build

npm run watch // to watch changes
```

or

```
yarn build // for single build

yarn watch // to watch changes
```
  

## Author

[Sergey Frangulov](mailto:sergey.frangulov@gmail.com)

## License
ISC License

Copyright (c) 2020 Sergey Frangulov

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  