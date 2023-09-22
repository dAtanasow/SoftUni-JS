function bitMining(input) {
    let index = 0;
    let goldPerDay = input[index];
    index++

    let oneGold = 67.51
    let bitcoin = 11949.16
    let bitcoinCount = 0
    let days = 0;
    let firstBitcoin = 0;
    let savedMoney = 0

    while (true) {
        days++
        if (days > input.length) {
            break;
        }
        if (days % 3 == 0) {
         savedMoney += (goldPerDay * 0.70) * oneGold
        } else {
         savedMoney += goldPerDay * oneGold
        }

        if (savedMoney >= bitcoin) {
            savedMoney -= bitcoin;
            bitcoinCount++
            firstBitcoin = days
        }

        goldPerDay = input[index];
        index++
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    console.log(`Left money: ${savedMoney.toFixed(2)}`);
}

bitMining([465, 342, 388]);