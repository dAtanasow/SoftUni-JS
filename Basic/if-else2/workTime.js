function solve(input) {
    let time = Number(input[0]);
    let day = input[1]

    switch (day) {
        case 'Monday':
            if (time >= 10 & time <= 18) {
                console.log('open');
            } else {
                console.log('closed')
            } break;
        case 'Tuesday':
            if (time >= 10 & time <= 18) {
                console.log('open');
            } else {
                console.log('closed')
            } break;
        case 'Wednesday':
            if (time >= 10 & time <= 18) {
                console.log('open');
            } else {
                console.log('closed')
            } break;
        case 'Thursday':
            if (time >= 10 & time <= 18) {
                console.log('open');
            } else {
                console.log('closed')
            } break;
        case 'Friday':
            if (time >= 10 & time <= 18) {
                console.log('open');
            } else {
                console.log('closed')
            } break;
        case 'Saturday':
            if (time >= 10 & time <= 18) {
                console.log('open');
            } else {
                console.log('closed')
            } break;
        default:
            console.log('closed');
    }
}

solve(["11", "Monday"]);
solve(["19", "Friday"]);
solve(["11", "Sunday"]);