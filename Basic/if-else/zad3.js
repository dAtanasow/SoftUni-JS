function clock(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let totalMins = hour * 60 + minutes + 15;
    let newHour = Math.floor(totalMins / 60);
    let newMins = totalMins % 60;
    if (newHour > 23) {
        newHour = 0;
    }
    if (newMins < 10) {
        console.log(`${newHour}:0${newMins}`);
    } else {
        console.log(`${newHour}:${newMins}`);
    }
}

    clock(["1", "46"]);
    clock(["0", "01"]);
    clock(["23", "59"]);
    clock(["11", "08"]);
    clock(["12", "49"]);