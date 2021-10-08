const { test, expect } = require("@jest/globals");
const morseFunction = require('../Main')

test('Null input', ()=>{
    expect(morseFunction(null)).toBe('ArgumentNullException');
})

test('empty input', ()=>{
    expect(morseFunction(' ')).toBe('Empty input ');
})

test('int input', ()=>{
    expect(morseFunction(4156465)).toBe('Int input not accepted');
})

test('special character', ()=>{
    expect(morseFunction('###')).toBe('Invalid character');
})

test('String input', ()=>{
    expect(morseFunction('sos')).toBe('... $$ --- $$ ...');
})

test('String input with initial special character', ()=>{
    expect(morseFunction('### sos')).toBe('... $$ --- $$ ...');
})

test('String input with ended special character', ()=>{
    expect(morseFunction('sos ###')).toBe('... $$ --- $$ ...');
})

