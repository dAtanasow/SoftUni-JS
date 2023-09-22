function solve(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let outPutNumbers = '';
    let sum = 0;
    for (let i = num1; i <= num2; i++) {

        if (i % 9 == 0) {
            sum += i
            outPutNumbers += i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(outPutNumbers);
}


solve(["100", "200"]);