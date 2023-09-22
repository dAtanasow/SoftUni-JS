function goldMine(input) {
    let goldMinedForLoc = 0
    let index = 0
    let location = Number(input[index])
    index++
    
    for (i = 0; i < location; i++) {
        let expAvgGoldPerDay = Number(input[index])
        index++
        let days = Number(input[index])
        index++
        for (n = 1; n <= days; n++) {
            let goldMinedPerDay = Number(input[index])
            index++
            goldMinedForLoc += goldMinedPerDay 
        }

        let avgGoldPerDay = goldMinedForLoc / days
    
        if (avgGoldPerDay >= expAvgGoldPerDay) {
            console.log(`Good job! Average gold per day: ${avgGoldPerDay.toFixed(2)}.`);
        } else {
            console.log(`You need ${(expAvgGoldPerDay - avgGoldPerDay).toFixed(2)} gold.`);
        }
        goldMinedForLoc = 0;
    }
}

goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])