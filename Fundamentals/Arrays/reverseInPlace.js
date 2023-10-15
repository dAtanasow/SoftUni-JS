//Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array.
//Print the resulting elements on a single line, space-separated. //

function reverse(arr) {
    arr.reverse()
    console.log(arr.join(' '));
}

reverse(['a', 'b', 'c', 'd', 'e']);
reverse(['33', '123', '0', 'dd'] )