function otherThen0(input) {
    let num = Number(input[0]);

    if (num > 0 & num <= 100 || num < 0 & num >= -100) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

otherThen0(["-25"]);
otherThen0(["0"]);
otherThen0(["25"]);