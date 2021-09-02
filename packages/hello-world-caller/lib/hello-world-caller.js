'use strict';

module.exports = helloWorldCaller;

const helloWorld = require("hello-world")

function helloWorldCaller() {
    // TODO
    console.log(helloWorld())
}

helloWorldCaller()