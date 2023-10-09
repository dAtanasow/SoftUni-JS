<<<<<<< HEAD
//Write a function, which receives two string arrays and merges them into a third array.
//• If the index of the element is even, add into the third array the sum of both elements at that index
//• If the index of the element is odd, add the concatenation of both elements at that index
//Input
//As input, you will receive two string arrays (with equal length).
//Output
//As output, you should print the resulting third array, each element separated by " - ".

function merge(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];
        let el2 = arr2[i];
        if (i % 2 === 0) {
=======
<<<<<<< HEAD
function merge(arr1, arr2) {
    let result = [];
    let counter = 0
    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];
        let el2 = arr2[i];
        if (counter % 2 === 0) {
>>>>>>> 5cf513b8663c91ee6e8e4f626b0b3090aeb71335
            let sum = Number(el1) + Number(el2)
            result.push(sum)
        } else {
            result.push(el1 + el2)
        }
<<<<<<< HEAD
=======
        counter++
>>>>>>> 5cf513b8663c91ee6e8e4f626b0b3090aeb71335
    }

    console.log(result.join(' - '));
}

merge(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)
merge(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44'])
<<<<<<< HEAD
=======
=======
function merge(arr1, arr2) {
    let result = [];
    let counter = 0
    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];
        let el2 = arr2[i];
        if (counter % 2 === 0) {
            let sum = Number(el1) + Number(el2)
            result.push(sum)
        } else {
            result.push(el1 + el2)
        }
        counter++
    }

    console.log(result.join(' - '));
}

merge(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)
merge(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44'])
>>>>>>> 61b74382ab542d67e17356b914976189aa291767
>>>>>>> 5cf513b8663c91ee6e8e4f626b0b3090aeb71335
