function oscars(input) {
    let name = input[0];
    let points = Number(input[1]);
    let peoples = Number(input[2]);

    for (i = 3; i < input.length; i++) {
        let characters = input[i].length
        i++
        let pointsPerActor = Number(input[i]);
        points = points + (pointsPerActor * characters / 2)

        if (points > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`); break;
    }
    }
    let diff = 1250.5 - points
    if (points <= 1250.5) {
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }
}

oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])