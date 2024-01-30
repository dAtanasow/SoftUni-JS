// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.

// Return the resulting array

function sorting(arr) {
    arr.sort((a, b) => a - b)

    let res = [];
    let i = 0
   while (arr.length > 0) {
    if (i % 2 == 0) {
       res.push(arr.shift());
    } else {
        res.push(arr.pop())
    }
    i++
   }
    return res;
}

console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));