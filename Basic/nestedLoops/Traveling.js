function traveling(input) {
    let destination = input[0];
    let neededMoney = Number(input[1]);
    let money = 0;
    let finish = false
    for (i = 2; i < neededMoney; i++) {
        let saveMoney = input[i];
        money += Number(saveMoney);
        if (i == 'End') {
            break;
        }
        if (money >= neededMoney) {
            finish = true
            console.log(`Going to ${destination}!`);
            if (finish) {
                money = 0;
                i++
                destination = input[i]
                i++
                neededMoney = input[i]
            }
        }
    }
}

traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])