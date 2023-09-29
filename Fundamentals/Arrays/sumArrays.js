//Write a function that receives an array of numbers and prints the sum of the first and last element in that array

function sumArrays(arr) {
    let result = arr[0] + arr[arr.length - 1]
    console.log(result);
}

sumArrays([20, 30, 40])
sumArrays([10, 17, 22, 33] )
sumArrays([11, 58, 69])