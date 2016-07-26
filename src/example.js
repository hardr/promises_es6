module.exports = {
  // your code here
  simplePromise: simplePromise,

  add10Promise: add10Promise,

  reject,

  sum50
}

function simplePromise(bool) {
  return new Promise(function(resolve, reject) {
    bool ? resolve('OK') : reject('BAD'); //this is like if else statement
  }).catch(function (err) {
    return err;
  });
};

function add10Promise(num) {
  return new Promise(function(resolve, reject) {
    resolve((num || 0) + 10);
  })
}

function reject(everything) {
  return new Promise(function(resolve, reject) {
    reject(everything);
  });
}

function sum50() {
  return new Promise(function(resolve, reject) {
    resolve(50);
  });
}
