function hospital(input) {
    let days = input[0]
    let doctors = 7;
    let revPatients = 0;
    let noRevPatients = 0;
    for (i = 1; i <= days; i++) {
        let patients = Number(input[i]);
        if (i == 3) {
            if (noRevPatients > revPatients) {
                doctors++
            }
        }
        if (patients <= doctors) {
            revPatients += patients
        } else {
            revPatients += doctors
            noRevPatients += patients - doctors
        }
    }
    console.log(`Treated patients: ${revPatients}.`);
    console.log(`Untreated patients: ${noRevPatients}.`);
}

hospital(['4',
    '7',
    '27',
    '9',
    '1'])