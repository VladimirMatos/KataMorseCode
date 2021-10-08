const { test, expect } = require("@jest/globals");
const morseFunction = require("../Main");


test('Test null input',()=>{
   expect(morseFunction(null)).toBe('Null exception') 
})

test('Test empty input',()=>{
    expect(morseFunction(' ')).toBe('Not accept empty input') 
 })
 
test('Test number input',()=>{
    expect(morseFunction(564654)).toBe('Not accept number input') 
 })

 test('Test string with special characters',()=>{
    expect(morseFunction('###')).toBe('Not accept special character') 
 })

 test('Test string normal test',()=>{
    expect(morseFunction('SOS')).toBe('... $$ --- $$ ...') 
 })

 test('Test string with initial special characters test',()=>{
    expect(morseFunction('## SOS')).toBe('... $$ --- $$ ...') 
 })

 test('Test string with ended special characters test',()=>{
    expect(morseFunction('SOS$$')).toBe('... $$ --- $$ ...') 
 })
