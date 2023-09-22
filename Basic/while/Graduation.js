function graduation(input) {

    let name = input[0];
    let index = 0;
    let grades = 1;
    let sum = 0;
    let excluded = 0;
    let hasExcluded = false;
    while (grades <= 12) {
        index++
        let current = Number(input[index])
        if (current < 4) {
            excluded++
            if (excluded >= 2) {
                hasExcluded = true;
                console.log(`${name} has been excluded at ${grades} grade`);
                break;
            }
            continue;
        }
        sum += current
        grades++
    }
    let avg = sum / 12
    if (!hasExcluded) {
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    }
}

graduation(["Gosho",

"5",

"5.5",

"6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])