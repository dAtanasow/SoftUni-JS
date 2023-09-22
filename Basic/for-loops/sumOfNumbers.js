function sumOfNumbers(input) {
    let text = input[0];
    let sum = 0;
    for (let n = 0; n < text.length; n++) {
        let num = Number(text[n]);
        sum += num
    }
    console.log(`The sum of the digits is: ${sum}`);
}
sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);