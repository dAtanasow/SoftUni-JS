//Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the
//elements to its right.
//Output
//Print all top integers on the console, separated by a single space

function maxNumber(arr) {
<<<<<<< HEAD
    let biggerIntegers = []
    for (let i = arr.length - 1; i >= 0; i--) {
        let isTop = true
        let n = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j]
            if (rightNum >= n) {
                isTop = false
                break;
            }
        }
        if (isTop) {
            biggerIntegers.push(n)
        }
    }
    biggerIntegers.reverse()
=======
    let n = 0
    let biggerIntegers = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > n) {
            n = arr[i]
            biggerIntegers.push(n)
        }
    }
>>>>>>> 5cf513b8663c91ee6e8e4f626b0b3090aeb71335
    console.log(biggerIntegers.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);