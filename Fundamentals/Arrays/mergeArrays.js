<<<<<<< HEAD
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
