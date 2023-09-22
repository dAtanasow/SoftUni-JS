function examPreparation(input) {
    let maxBadGrades = Number(input[0]);
    let badGrades = 0;
    let index = 1;
    let index2 = 2;
    let problem = input[index];
    let grade = Number(input[index2])
    let problems = 0;
    let gradeSum = 0;
    while (badGrades < maxBadGrades) {
        if (grade <= 4.00) {
            badGrades++
            if (badGrades == maxBadGrades) {
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        }
        let avg = gradeSum / problems
        if (problem == 'Enough') {
            console.log(`Average score: ${avg.toFixed(2)}`);
            console.log(`Number of problems: ${problems}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
        index += 2;
        index2 += 2;
        problems++
        gradeSum += grade;
        lastProblem = problem;
        problem = input[index];
        grade = Number(input[index2]);
    }
}

examPreparation(["3",

    "Money",

    "6",

    "Story",

    "4",

    "Spring Time",

    "5",

    "Bus",

    "6",

    "Enough"])