function friendList(arr) {
    let friends = arr.shift().split(', ')
    let blacklistedCount = 0;
    let lostedCount = 0
    let losted = []

    let command = arr.shift();
    while (command != 'Report') {
        tokens = command.split(' ')
        if (tokens[0] == 'Blacklist') {
            let name = tokens[1]
            if (friends.includes(name) && name != 'Blacklisted' && name != "Lost") {
                console.log(`${name} was blacklisted.`);
                let idx = friends.indexOf(name)
                friends.splice(idx, 1, 'Blacklisted')
                blacklistedCount++
            } else {
                console.log(`${name} was not found.`);
            }
        } else if (tokens[0] == 'Error') {
            let idx = tokens[1];
            if (idx >= 0 && idx < friends.length) {
                let name = friends[idx]
                if (friends.includes(name) && !losted.includes(name) && name != 'Lost' && name != 'Blacklisted') {
                    console.log(`${friends[idx]} was lost due to an error.`);
                    losted.push(friends[idx])
                    friends.splice(idx, 1, 'Lost')
                    lostedCount++
                }
            }
        } else if (tokens[0] == 'Change') {
            let idx = tokens[1];
            newName = tokens[2];
            if (idx >= 0 && idx < friends.length) {

                console.log(`${friends[idx]} changed his username to ${newName}.`);
                friends[idx] = newName
            }
        }
        command = arr.shift()
    }
    console.log(`Blacklisted names: ${blacklistedCount}`);
    console.log(`Lost names: ${lostedCount}`);
    console.log(friends.join(' '));
}

friendList(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
friendList(["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"]);