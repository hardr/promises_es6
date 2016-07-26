var Promise = require('bluebird'),
    request = require('request');

// your code here

function pokemon(poke) {
  return new Promise(function(resolve, reject) {
    reject('A Pokemon is required to use this method!')
  });
}
