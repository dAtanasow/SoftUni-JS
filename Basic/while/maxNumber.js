function maxNumber(input) {
    
    let num = input[0];
    let index = 1
    let max = Number.MIN_SAFE_INTEGER;

    while (num !== 'Stop') {
        let a = Number(num);
        if (a > max) {
            max = a;
        }
        
        num = input[index]
        index++
    }
    console.log(max);
}

maxNumber(["100",

"99",

"80",

"70",

"Stop"])