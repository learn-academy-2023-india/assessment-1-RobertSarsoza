// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code: 


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
const combined1984and1998Runs = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(combined1984and1998Runs.length)
// Expected output: 9

// Pseudo code:
// First utilize the 1) "Padres 1984 World Series runs" array and the 2) "Padres 1998 World Series runs" array.  Next combine them together to give an output of the combined data's total elements (9). (Remember this is NOT index and spaces count)
// Start by combining the 2 arrays with concat method. 
// Then create new array name that encompases both arrays and the concat method.  
// Finally, console log the new array name with the length method to display the output desired(9). 

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
const reversedCurrentCohort = currentCohort.split("").reverse().join("")
console.log(reversedCurrentCohort);
// Expected output: "3202 NRAEL"

// Pseudo code:
// First utilize the variable currentCohort that contains the "LEARN 2023" string. 
// Next create a new string that encompasses the original string and the methods used to reverse the string (split, reverse and join). 
// Finally console log the new string name to display the desired output of 3202 NRAEL.  (Make sure to leave strings in split and join with empty strings ("") )

// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
for (let x = 0; x <stockExchange.length; x++) {
    if (stockExchange[x] % 2 !==0) {
        console.log(stockExchange[x]);
    }
}
// Expected output: 13 5 -5 27

// Pseudo code:
// First utilize the variable stockExchange, which creates an array. 
// Next create a for loop's starting condition, stopping condition, and iteration (how to increment). 
// The starting condition is x=0
// The stopping condition is the length of stockExchanges's array
// The iteration is to be increasing from start to finish, which is determined by using ++.
//  Now create a condition that will only select odd numbers from stockExchanges's array.
// Do this by creating an if statement that says "if" the stockExchange variable's array are odd then log it
// so if (stockEchange[x] (to select each element in the array use [x] *** MUST be in brackets to signal what is called dynamic access)*** 
// then use % 2 !==0 (% is used to determine if a number is even or odd (% 2 ===0 even) (% 2 !==0 odd)) (! is used to check if the remainder is not = to 0)
// if the action is true (odd) use console.log(stockExchange[x] to display all the logged numbers.
