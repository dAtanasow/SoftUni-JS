// Write a function that processes information about a race. On the first line, you will be given a list of participants
// separated by ", ". On the next few lines until you receive a line "end of race" you will be given some info which will
// be some alphanumeric characters. In between them, you could have some extra characters which you should
// ignore. For example: "G!32e%o7r#32g$235@!2e". The letters are the name of the person and the sum of the digits
// is the distance he ran. So here we have George who ran 29 km. Store the information about the person only if the
// list of racers contains the name of the person. If you receive the same person more than once just add the
// distance to his old distance. At the end print the top 3 racers ordered by distance in descending in the format:
// "1st place: {first racer}
// 2nd place: {second racer}
// 3rd place: {third racer}"

function race(arr) {
    let list = arr.shift().split(", ");
    let command = arr.shift();

    let result = {}
    let letterPattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;

    list.forEach(name => result[name] = 0)
        
    while (command != 'end of race') {
        let letterMatches = command.match(letterPattern);
        let name = letterMatches.join('')

        let digitMatches = command.match(digitPattern)
        let distance = digitMatches.map(Number).reduce((acc, val) => acc + val);

        if (name in result) {
            result[name] += distance
        }
        command = arr.shift()
    }
    let sortedResults = Object.entries(result).sort((a, b) => b[1] - a[1])
    console.log(`1st place: ${sortedResults[0][0]}`);
    console.log(`2nd place: ${sortedResults[1][0]}`);
    console.log(`3rd place: ${sortedResults[2][0]}`);
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);