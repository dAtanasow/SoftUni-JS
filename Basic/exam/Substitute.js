function substitute(input) {
    let first = Number(input[0])
    let sec = Number(input[1])
    let third = Number(input[2])
    let four = Number(input[3])

    let firstNum = ''
    let secNum = ''

    for (let a = first; a <= 8; a++) {
        for (let b = sec; b <= 9; b++) {
            for (let c = third; c <= 8; c++) {
                for (let d = four; d <= 9; d++) {
                    if (a % 2 == 0 && b % 2 !== 0 && c % 2 == 0 && d % 2 !== 0) {
                        firstNum += a
                        firstNum += b
                        secNum += c
                        secNum += d
                        if (firstNum == secNum) {
                            console.log("Cannot change the same player.");
                        } else {
                            console.log(`${firstNum} - ${secNum}`);
                        }
                        firstNum = ''
                        secNum = ''
                    }
                }
            }
        }
    }
}
substitute(["7",
    "6",
    "8",
    "5"])