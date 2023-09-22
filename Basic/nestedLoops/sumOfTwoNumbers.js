function sumOfTwoNumbers(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let num = Number(input[2])
    let counter = 0;
    let found = false;
    for (a = x; a <= y; a++) {
        for (b = x; b <= y; b++) {
            counter++
            if (a + b == num) {
                found = true
                console.log(`Combination N:${counter} (${a} + ${b} = ${num})`)
            }
        }
        if (found) {
            break;
        }
    }
    if (!found) {
        console.log(`${counter} combinations - neither equals ${num}`);
    }
}

sumOfTwoNumbers(["1",

"10",

"5"])