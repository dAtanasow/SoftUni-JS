<<<<<<< HEAD
//Write a program, which receives a number n and an array of elements. Your task is to create a new array with n
//numbers from the original array, reverse it and print its elements on a single line, space-separated.

function reverse(n, arr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }
    newArr.reverse()
    console.log(newArr.join(' '));
}

reverse(3, [10, 20, 30, 40, 50] );
reverse(2, [66, 43, 75, 89, 47]);
=======
//Write a program, which receives a number n and an array of elements. Your task is to create a new array with n
//numbers from the original array, reverse it and print its elements on a single line, space-separated.

function reverse(n, arr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }
    newArr.reverse()
    console.log(newArr.join(' '));
}

reverse(3, [10, 20, 30, 40, 50] );
reverse(2, [66, 43, 75, 89, 47]);
>>>>>>> 5cf513b8663c91ee6e8e4f626b0b3090aeb71335
reverse(4, [-1, 20, 99, 5] )