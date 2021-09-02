'use strict';

module.exports = helloWorld;

const figlet = require('figlet')

function helloWorld() {
    // TODO
    // console.log('hello world') boring
    const text = figlet.textSync('Hello World!')
    return text
}
