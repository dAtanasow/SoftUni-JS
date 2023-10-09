<<<<<<< HEAD
//Write a function, which changes the value of odd and even numbers in an array of numbers.
//• If the number is even - add to its value its index position
//• If the number is odd - subtract to its value its index position
//Output
//On the first line print the newly modified array, on the second line print the sum of numbers from the original
//array, on the third line print the sum of numbers from the modified array//

=======
<<<<<<< HEAD
>>>>>>> 5cf513b8663c91ee6e8e4f626b0b3090aeb71335
function array(input) {
    let sumOriginal = 0
    let sumModified = 0
    let newArray = [];
    for (let i = 0; i < input.length; i++) {
        let num = Number(input[i]);
        sumOriginal += num
        if (num % 2 == 0) {
            num += i;
        } else {
            num -= i;
        }
        newArray.push(num)
        sumModified += num
        
    }
    console.log(newArray);
    console.log(sumOriginal);
    console.log(sumModified);
}

array([5, 15, 23, 56, 35])
array([-5, 11, 3, 0, 2]
<<<<<<< HEAD
=======
=======
function array(input) {
    let sumOriginal = 0
    let sumModified = 0
    let newArray = [];
    for (let i = 0; i < input.length; i++) {
        let num = Number(input[i]);
        sumOriginal += num
        if (num % 2 == 0) {
            num += i;
        } else {
            num -= i;
        }
        newArray.push(num)
        sumModified += num
        
    }
    console.log(newArray);
    console.log(sumOriginal);
    console.log(sumModified);
}

array([5, 15, 23, 56, 35])
array([-5, 11, 3, 0, 2]
>>>>>>> 61b74382ab542d67e17356b914976189aa291767
>>>>>>> 5cf513b8663c91ee6e8e4f626b0b3090aeb71335
    )