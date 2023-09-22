function invalidNum(input) {
    let num = Number(input[0]);

    if (!(num >= 100 && num <= 200) && num != 0) {
        console.log("invalid");
    }
}

invalidNum(["75"])
invalidNum(["150"])
invalidNum(["220"])
invalidNum(["199"])
invalidNum(["-1"])
invalidNum(["0"])