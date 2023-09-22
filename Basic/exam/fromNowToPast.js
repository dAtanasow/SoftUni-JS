function solve(input) {
    let startMoney = Number(input[0]);
    let targetYear = Number(input[1]);
    let age = 18
    for (i = 1800; i <= targetYear; i++) {
        if (i % 2 == 0) {
            startMoney -= 12000
        } else {
            startMoney -= 12000 + 50 * age
        }
        age++
    }
    if (startMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${startMoney.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(startMoney.toFixed(2))} dollars to survive.`);
    }
}

solve(["100000.15",
"1808"])