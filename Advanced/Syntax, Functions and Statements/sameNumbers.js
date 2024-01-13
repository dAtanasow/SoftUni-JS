// Write a function that takes an integer number as an input and checks if all the digits in a given number are the same or not.

// Print on the console true if all numbers are the same and false if not. On the next line, print the sum of all digits.

// The input comes as an integer number.

// The output should be printed on the console.

function sameNumbers(num) {
    let numAsString = String(num)
    let isTrue = true
    let sum = Number(numAsString[0])
 
    for (let i = 1; i < numAsString.length; i++) {
        if (numAsString[i] != numAsString[i - 1]) {
            isTrue = false
        }
        sum += Number(numAsString[i])
    }
    console.log(isTrue);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);