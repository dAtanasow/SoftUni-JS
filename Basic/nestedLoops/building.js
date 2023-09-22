function building(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let buff = ''
    for (floor = x; floor > 0; floor--) {
        buff = ''
        for (room = 0; room < y; room++) {
            let ch = ''
            if (floor == x) {
                ch = 'L';

            } else if (floor % 2 !== 0) {
                ch = 'A'

            } else {
                ch = 'O'

            }
            buff += `${ch}${floor}${room} `
        }
        console.log(buff);
    }
}

building(["6",

    "4"])