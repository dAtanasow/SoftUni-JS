function onTimeForTheExam(input) {
    let hour = Number(input[0]);
    let min = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExam = hour * 60 + min;
    let timeArrive = hourArrive * 60 + minArrive;
    let diff = Math.abs(timeArrive - timeExam);
    let m = diff % 60;
    let h = Math.floor(diff / 60);

    if (timeArrive < timeExam && (diff > 30)) {
        console.log('Early');
        if (h > 0) {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        } else {
            console.log(`${m} minutes before the start`);
        }
    } else if (timeArrive <= timeExam) {
        console.log('On time');
        if (m > 0) {
            console.log(`${m} minutes before the start`);
        }
    } else {
        console.log('Late');
        if (h > 0) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);;
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        } else {
            console.log(`${m} minutes after the start`);
        }
    }
}

onTimeForTheExam(["9", "30", "9", "50"])
onTimeForTheExam(["9", "00", "8", "30"])
onTimeForTheExam(["11", "30", "10", "55"])
onTimeForTheExam(["10", "00", "10", "00"])
onTimeForTheExam(["14", "00", "13", "55"])
onTimeForTheExam(["9", "00", "10", "30"])
onTimeForTheExam(["16", "00", "15", "00"])