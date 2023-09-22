function worldRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let speedPerMeter = Number(input[2]);

    let time = speedPerMeter * distance;
    let delay = Math.floor(distance / 15) * 12.5;
    let finalTime = time + delay;
    if (finalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(finalTime - record).toFixed(2)} seconds slower.`);
    }
}

worldRecord(["10464", "1500", "20"])
worldRecord(["55555.67", "3017", "5.03"])