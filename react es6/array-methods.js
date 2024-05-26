/**
 * the .map() method allows you to run a function on each item in the array, returning a new array as the result
 * - In React, map() can be used to generate lists
 */

const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => item + 's' )

console.log(myList);