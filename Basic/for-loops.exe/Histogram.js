function histogram(input) {
    let q = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let index = 0;
    for (i = 1; i < input.length; i++) {
        index = input[i];
        if (index < 200) {
            p1++
        } else if (index >= 200 && index <= 399) {
            p2++
        } else if (index >= 400 && index <= 599) {
            p3++
        } else if (index >= 600 && index <= 799) {
            p4++
        } else {
            p5++
        }
    }
    console.log((p1 / (input.length - 1) * 100).toFixed(2) + '%');
    console.log((p2 / (input.length - 1) * 100).toFixed(2) + '%');
    console.log((p3 / (input.length - 1) * 100).toFixed(2) + '%');
    console.log((p4 / (input.length - 1) * 100).toFixed(2) + '%');
    console.log((p5 / (input.length - 1) * 100).toFixed(2) + '%');
}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);