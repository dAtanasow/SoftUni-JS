////Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number.

function findPairs(array, targetSum) {
    let pairs = [];

    for (let i = 0; i < array.length; i++) {
        let num1 = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let num2 = array[j];

            if (num1 + num2 === targetSum) {
                let pair = [num1, num2];
                if (!pairs.some(p => p[0] === pair[0] && p[1] === pair[1])) {
                    pairs.push(pair);
                }
            }
        }
    }

    pairs.forEach(pair => console.log(pair.join(' ')));
}
findPairs([1, 7, 6, 2, 19, 23],
    8
)
findPairs([14, 20, 60, 13, 7, 19, 8],
    27
)
findPairs([1, 2, 3, 4, 5, 6],
    6
)