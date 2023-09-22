function tennisRanklist(input) {
    let tours = Number(input[0]);
    let startPoints = Number(input[1]);
    let points = 0
    let winTours = 0;

    for (i = 2; i < input.length; i++) {
        let res = input[i];
        if (res == 'W') {
            points += 2000;
            winTours++
        } else if (res == 'F') {
            points += 1200;
        } else if (res == 'SF') {
            points += 720;
        }
    }
    let avgWinPoints = points / tours;
    let winPercent = (winTours / tours) * 100;

    console.log(`Final points: ${startPoints + points}`);
    console.log(`Average points: ${Math.floor(avgWinPoints)}`);
    console.log(winPercent.toFixed(2) + "%");
}

tennisRanklist(["5",

    "1400",

    "F",

    "SF",

    "W",

    "W",

    "SF"])