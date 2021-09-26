/** 
  * Ref: https://medium.com/@andrey.igorevich.borisov/10-javascript-exercises-with-arrays-c44eea129fba
  * 
  * Task description: Write a method that creates an array of unique values that are included in all given arrays 
  * Expected Result: ([1, 2], [2, 3]) => [2] 
  * Restriction: Use only arrays as data structures to solve the problem
  * @param {?} arrays - Arrays of primitive data types 
  * @returns {Array} 
*/

const intersection = (...arrays) => {
   // Complete
}
   
const arr1 = [1, 2];
const arr2 = [2, 3];
console.log(intersection(arr1, arr2)) // [2]

const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
console.log(intersection(arr3, arr4, arr5)) // ['b']

const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']
