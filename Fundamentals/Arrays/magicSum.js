////Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number.

function findPairs(arr, targetSum) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}

findPairs([1, 7, 6, 2, 19, 23],
    8
)
findPairs([14, 20, 60, 13, 7, 19, 8],
    27
)
findPairs([1, 2, 3, 4, 5, 6],
    6
)