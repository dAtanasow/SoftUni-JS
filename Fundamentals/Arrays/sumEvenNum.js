//Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers

function sumOfEven(arr) {
   let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += Number(arr[i])
        }
    }
    console.log(sum);
}

sumOfEven(['1','2','3','4','5','6'] );
sumOfEven(['3','5','7','9']);
sumOfEven(['2','4','6','8','10'] )