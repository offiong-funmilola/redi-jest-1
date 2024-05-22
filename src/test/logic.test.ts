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