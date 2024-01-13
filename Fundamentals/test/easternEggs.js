function easternEggs(arr) {
    let pattern = /[#@]+(?<color>[a-z]{3,})[#@][^0-9A-Za-z]+\/+(?<amount>[0-9]+)/g

    for (let str of arr) {
        let matches = str.matchAll(pattern)
        for (let match of matches) {
            let { color, amount } = match.groups
            console.log(`You found ${amount} ${color} eggs!`)
        }
    }
}

easternEggs([`#@##@red@#/8/@rEd@/2/#@purple@////10/`])
easternEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])