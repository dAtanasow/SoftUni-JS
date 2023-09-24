function calculator(a, op, b) {
    if (op == '+') {
        res = a + b;
    } else if (op == '-') {
        res = a - b;
    } else if (op == '/') {
        res = a / b;
    } else if (op == '*') {
        res = a * b;
    }

    console.log(res.toFixed(2));
}

calculator(5,

'+',

10)
calculator(25.5,

    '-', 3)