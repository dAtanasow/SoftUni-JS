function trainTheTrainers(input) {
    let peoples = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++
    let sumOfGrades = 0;
    let sumAvg = 0;
    let counter = 0;

    while (command !== 'Finish') {
        counter++
        let presentName = command;
        let sumOfGrades = 0;

        for (i = 0; i < peoples; i++) {
            let grade = Number(input[index]);
            index++

            sumOfGrades += grade
        }

        let tempAvg = sumOfGrades / peoples;
        sumAvg += tempAvg
        console.log(`${presentName} - ${tempAvg.toFixed(2)}.`);


        command = input[index];
        index++
    }
    let totalAvg = sumAvg / counter;
    console.log(`Student's final assessment is ${totalAvg.toFixed(2)}.`);
}

trainTheTrainers(["3",

    "Arrays",

    "4.53",

    "5.23",

    "5.00",

    "Lists",

    "5.83",

    "6.00",

    "5.42",

    "Finish"])