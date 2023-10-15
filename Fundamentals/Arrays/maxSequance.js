//Write a function that finds the longest sequence of equal elements in an array of numbers.
//If several longest sequences exist, print the leftmost one.


function maxSequence(arr) {
    let currentSeries = [];
    let longestSeries = [];

    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] == arr[i - 1]) {
            currentSeries.push(arr[i]);
        } else {
            currentSeries = [arr[i]]
        }
        if (currentSeries.length > longestSeries.length) {
            longestSeries = currentSeries;
        }
    }
    console.log(longestSeries.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])
