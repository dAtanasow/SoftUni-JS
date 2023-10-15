//Write a function that determines if there exists an element in the array of numbers such that the sum of the
//elements on its left is equal to the sum of the elements on its right.
//If there are NO elements to the left/right, their sum is 0.
//Print the index that satisfies the required condition or "no" if there is no such index//

function equalSums(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == undefined) {
            console.log('0');
            break;
        }
        for (let j = 0; j < i; j++) {
            leftSum += arr[j]
        }
        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k]
        }

        if (leftSum == rightSum) {
            console.log(i);
            isEqual = true
            break;
        } else {
            isEqual = false;
        }

        leftSum = 0;
        rightSum = 0;
    }

    if (!isEqual) {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
equalSums([1])
equalSums([1, 2, 3])
