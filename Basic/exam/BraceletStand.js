function braceletStand(input) {
    let budget = Number(input[0]);
    let profit = Number(input[1]);
    let expenses = Number(input[2]);
    let giftPrice = Number(input[3]);
    let days = 5;

    let savedMoney = days * budget;
    let earnedMoney = days * profit;
    let totalSavedMoney = (savedMoney + earnedMoney) - expenses

    if (totalSavedMoney >= giftPrice) {
        console.log(`Profit: ${totalSavedMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(giftPrice - totalSavedMoney).toFixed(2)} BGN.`);
    }

}

braceletStand(["15.20",
"200.00",
"7.30",
"1500.12"])