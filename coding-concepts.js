// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?
const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer:

//  9

// b) Verify and explain: 

// The output is 10 because spaces are included when using the length method. The variable cohort is declared by using const and it holds the string value of LEARN 2023. the string method length is used to count all characters within the string. 

// --------------------2) What will this log?
const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer:

//  there will be no output because the array is undefined 

// b) Verify and explain:

//  the output is 'o' because the 5th letter is o. the 4 was an index not an array and the count of indexes starts at zero. 

// --------------------3) What will this log?
const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: 

// The output will be Javascript

// b) Verify and explain:  

// The output was Ruby because the index is 1 and javascript =0 ruby =1 python =2 and c++ =3. I focused on the value of the variable rather than the index position in the array. 

// --------------------4) What will this log?
const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: 

// the output will be Saturday, Sunday with the first letter of each element being capitalized.

// b) Verify and explain: 

// originally I thought it would only uppercase the first letter but after my research I realized that the goal was to uppercase the entire two words. The output produces an error because the toUpperCase() is not an Array method it is a String method. From what I found, I would need to iterate each element in the array using an array method like .map
// example  
// const newArray  = originalArray .arrayMethod (parameter => parameter .stringMethod ())
//    ^upCase      ^equals ^weekendDays ^.map      ^day    ^arrowfunct   ^toUpperCase  ^argument(keep blank)

// --------------------5) What will this log?
const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: 

// it will return number 

// b) Verify and explain:

//  At first I received an error because I forgot to comment out #4's code block. The output is number because of the .length method it would return the number of elements in the array. so with that in mind it would return 3 from the dataTypes array and typeof will make it return number since thats what 3 is. 