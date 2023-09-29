//Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an
//array.

function evenAndOdd(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenSum += Number(arr[i])
        } else {
            oddSum += Number(arr[i])
        }
    }

    let res = evenSum - oddSum
    console.log(res);
}

evenAndOdd([1, 2, 3, 4, 5, 6])
evenAndOdd([2, 4, 6, 8, 10])
evenAndOdd([3, 5, 7, 9])