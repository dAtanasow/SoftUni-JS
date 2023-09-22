function sumOfOddNumbers(n) {
    let sum = 0;
    let ch = 1;
    for (let i = 1; ch <= n; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i
            ch++
        }
    }
    console.log('Sum: '+ sum);
}

sumOfOddNumbers(3)