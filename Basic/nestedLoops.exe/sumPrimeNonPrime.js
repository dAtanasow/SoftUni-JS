function sumPrimeNonPrime(input) {
    index = 0;

    let command = input[index];
    index++

    let sumPrimeNum = 0;
    let sumNoPrimeNum = 0;

    while (command !== 'stop') {
        let num = Number(command);

        if (num < 0) {
            sumPrimeNum
            console.log("Number is negative.");
            command = input[index];
            index++
            continue;
        }

        if (num == 1) {
            sumPrimeNum += num
            command = input[index];
            continue;
        }
        let isPrime = true;

        for (i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sumPrimeNum += num;
        } else {
            sumNoPrimeNum += num
        }

        command = input[index]
        index++
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNum}`);
    console.log(`Sum of all non prime numbers is: ${sumNoPrimeNum}`);
}
sumPrimeNonPrime(["3",

    "9",

    "0",

    "7",

    "19",

    "4",

    "stop"])