function sumNumbers(input) {
    let target = Number(input[0]);
    let sum = Number(input[1])
    let index = 2
    while (sum <= target) {
        sum += Number(input[index])
        index++
        if (sum >= target) {
            console.log(sum);
        }
    }
}

sumNumbers(["20", "1", "2", "3", "4", "5", "6"])