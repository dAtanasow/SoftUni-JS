function minNumber(input) {
    let num = input[0];
    let index = 1
    let min = Number.MAX_SAFE_INTEGER;

    while (num !== 'Stop') {
        let a = Number(num);
        if (a < min) {
            min = a;
        }
        
        num = input[index]
        index++
    }
    console.log(min);
}

minNumber(["100",

"99",

"80",

"70",

"Stop"])