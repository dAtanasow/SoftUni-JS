function specialNumbers(input) {
    let n = Number(input[0]);
    let minNum = 1111;
    let maxNum = 9999;
    let print = true
    let buff = ''
    for (let i = minNum; i < maxNum; i++) {
        let currentNum = '' + i;
        for (j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);
            if (n % currentDigit == 0) {
                print = true;
            } else {
                print = false;
                break;
            }
        }
        if (print) {
            buff += `${i} `

        }
    }
    console.log(buff);
}

specialNumbers(["3"])