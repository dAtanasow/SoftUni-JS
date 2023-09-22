function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let hight = Number(input[2]);
    let space = width * length * hight
    let index = 3;
    let command = input[index];
    let packsIn = 0

    while (command !== 'Done') {
        let packs = Number(command)
        packsIn += packs

        if (packsIn >= space) {
            console.log(`No more free space! You need ${packsIn - space} Cubic meters more.`);
            break;
        }

        index++
        command = input[index]
    }
    if (space > packsIn) {
        console.log(`${space - packsIn} Cubic meters left.`);
    }
}

moving(["10",

    "1",

    "2",

    "4",

    "6",

    "Done"])