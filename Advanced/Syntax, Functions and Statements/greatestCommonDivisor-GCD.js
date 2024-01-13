// Write a function that takes two positive numbers as input and computes the greatest common divisor.

// The input comes as two positive integer numbers.

// The output should be printed on the console.

function greatestCommonDivisor(a, b) {
    let GCD = a % b

    while (GCD != 0) {
        a = b
        b = GCD
        GCD = a % b
    }
    console.log(b);

}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);