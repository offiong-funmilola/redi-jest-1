import {add} from "../logic";


test('summing two positive numbers', () => {
    expect(add(1, 10)).toBe(11)
})

// YOUR TASK: write the following test cases and modify the add function so it fulfills the expected behavior.
//  You can decide how the code should behave in these scenarios. When something goes wrong, it could return 0, throw an Error or something else :)

//  summing two negative numbers
//  summing a positive and a negative number
//  summing 0's
//  inputting undefined
//  inputting null
//  inputting NaN
//  inputting Infinity

test('sum two negative numbers', () => {
    expect(add(-1, -2)).toBe(-3)
})

test('sum a positive and a negative number', () => {
    expect(add(5, -3)).toBe(2)
})

test("summing 0's", ()=> {
    expect(add(0, 0)).toBe(0)
})

test('inputting undefined', ()=> {
    expect(add(!Number, !Number)).toBe(NaN)
})

test('inputing null', ()=> {
    expect(add(null, null)).toBe(null)
})

test('input infinity', ()=> {
    expect(add(Infinity, Infinity)).toBe(Infinity)
})