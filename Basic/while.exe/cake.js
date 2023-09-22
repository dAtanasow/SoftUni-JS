function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);

    let size = width * length;
    let index = 2
    let command = input[index]
    let takenPieces = 0

    while (command !== 'STOP') {
        let pieces = Number(command)
        takenPieces += pieces

        if (takenPieces > size) {
            console.log(`No more cake left! You need ${Math.abs(takenPieces - size)} pieces more.`);
            break;
        }
        index++
        command = input[index]
    }
    if (takenPieces <= size) {
        console.log(`${size - takenPieces} pieces are left.`);
    }
}



cake(["10",

    "10",

    "20",

    "20", "20", "20", "21"])