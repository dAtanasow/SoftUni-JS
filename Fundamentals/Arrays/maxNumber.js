<<<<<<< HEAD
//Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the
//elements to its right.
//Output
//Print all top integers on the console, separated by a single space

function maxNumber(arr) {
    let n = 0
    let biggerIntegers = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > n) {
            n = arr[i]
            biggerIntegers.push(n)
        }
    }
    console.log(biggerIntegers.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
=======
//Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the
//elements to its right.
//Output
//Print all top integers on the console, separated by a single space

function maxNumber(arr) {
    let n = 0
    let biggerIntegers = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > n) {
            n = arr[i]
            biggerIntegers.push(n)
        }
    }
    console.log(biggerIntegers.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
>>>>>>> 61b74382ab542d67e17356b914976189aa291767
maxNumber([27, 19, 42, 2, 13, 45, 48]);