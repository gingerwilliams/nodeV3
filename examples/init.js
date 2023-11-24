#!/usr/bin/env node

console.log("hello node");
// console.log(global);

/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  navigator: [Getter],
  fetch: [Function: fetch],
  crypto: [Getter]
} */

// console.log(process.argv)

// > node index.js something something 56789

// [
//     '/Users/gingerwilliams/.nvm/versions/node/v21.1.0/bin/node',
//     '/Users/gingerwilliams/source/front-end-masters/nodeV3/index.js',
//     'something',
//     'something',
//     '56789'
// ]

// console.log(process.env)
// console.log(process.env.NODE_ENV)

// > NODE_ENV=production node index.js
// production