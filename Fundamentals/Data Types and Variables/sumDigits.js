function sumDigits(num) {
    let numAsString = String(num)
    let sum = 0

    for (i = 0; i < numAsString.length; i++) {
        let n = Number(numAsString[i])
        sum += n
    }
    console.log(sum);
}

sumDigits(245678)