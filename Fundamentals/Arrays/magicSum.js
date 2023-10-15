//Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number.

function magicSum(arr, num) {

    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] != arr[j] &&
                arr[i] != num &&
                arr[j] != num) {
                let sum = arr[i] + arr[j]
                if (sum == num) {
                    let result = [arr[j], arr[i]]
                    console.log(result.join(' '));
                    arr.splice(i, 1)
                }
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],
    8
)
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
)
magicSum([1, 2, 3, 4, 5, 6],
    6)