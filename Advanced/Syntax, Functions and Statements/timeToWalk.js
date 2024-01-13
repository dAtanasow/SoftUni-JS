function timeToWalk(steps, stepLength, speed) {

    let distance = steps * stepLength
    let speedMeterInSec = speed / 3.6
    let rest = Math.floor(distance / 500)
    let walkingTime = distance / speedMeterInSec
    walkingTime += rest * 60

    let sec = Math.round(walkingTime % 60);
    let min = Math.floor(walkingTime / 60);
    let hours = Math.floor(min / 60);
    min -= hours * 60
    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minToPrint = min < 10 ? `0${min}` : `${min}`;
    let secToPrint = sec < 10 ? `0${sec}` : `${sec}`;

    console.log(`${hoursToPrint}:${minToPrint}:${secToPrint}`);

}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);