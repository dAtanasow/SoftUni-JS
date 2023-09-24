function numbers(num) {
    let numAsString = String(num);
    let sum = 0;
    for (i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i])
    }
let res = sum.toString().includes('9')
    console.log(res ? `${num} Amazing? True` : `${num} Amazing? False`);
}

numbers(1233)
numbers(999)