'use strict';

const { expect } = require('@jest/globals');
const helloWorld = require('..');

describe('hello-world', () => {
    it('Should return a string',()=>{
        const text = helloWorld()
        console.log(text)
        expect(typeof text).toBe("string")
    });
});
