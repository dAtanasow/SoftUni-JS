//Write a function that receives an array and the number of rotations you have to perform.
//Note: Depending on the number of rotations, the first element goes to the end.
//Output
//Print the resulting array elements separated by a single space.//

function rotation(arr, n) {
    for(i = 1; i <= n; i++) {
        arr.push(arr[0])
        arr.shift(arr[0]) 
    }
    console.log(arr.join(' '));
}

rotation([51, 47, 32, 61, 21], 2);
rotation([32, 21, 61, 1], 4);
rotation([2, 4, 15, 31], 5 );