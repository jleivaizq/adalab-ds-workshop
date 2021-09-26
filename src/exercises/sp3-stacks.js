import { Stack } from "@datastructures-js/stack";

/** 
  * Ref: https://www.educative.io/blog/level-up-javascript-coding-challenges#balanced-brackets
  * 
  * Task description: Given a string possibly containing three types of braces ({}, [], ()), write a 
  * function that returns a Boolean indicating whether the given string contains a valid nesting of braces.
  * Expected Result: 
  * - "This a test (detailing [balanced] brackets)" => true
  * - "This a test (detailing [balanced brackets)" => false 
  * Restriction: Use only arrays as data structures to solve the problem
  * @param {?} arrays - Arrays of primitive data types 
  * @returns {Array} 
*/

const balanced = (input) => {
    // Complete
}

let test1 = "This a test (detailing [balanced] brackets)";
console.log(test1,"=>",balanced(test1));

let test2 = "This a test (detailing [unbalanced brackets)";
console.log(test2,"=>",balanced(test2));