function stringGame(arr) {
    let str = arr.shift()
    
    let command = arr.shift().split(' ')

    while (command != 'Done'){
        if (command[0] == 'Change') {
            let newStr = str.split(command[1]).join(command[2])
            str = newStr
            console.log(str);
        } else if (command[0] == 'Includes') {
            if (str.includes(command[1])) {
                console.log('True');
            } else {
                console.log("False");
            }
        } else if (command[0] == 'End') {
            let word = command[1]
            let last = str.slice(str.length - word.length)
            if (word == last) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (command[0] == 'Uppercase') {
            str = str.toUpperCase()
            console.log(str);
        } else if (command[0] == "FindIndex") {
            let index = str.indexOf(command[1])
            console.log(index);
        } else if (command[0] == 'Cut') {
            let start = Number(command[1])
            let count = Number(command[2])
            let cutChars = str.substring(start, start + count)
            console.log(cutChars);
        }
    command = arr.shift().split(' ')
    }
}

stringGame(["//Th1s 1s my str1ng!//", "Change 1 i", "Includes string", "End my", "Uppercase", "FindIndex I", "Cut 5 5", "Done"])