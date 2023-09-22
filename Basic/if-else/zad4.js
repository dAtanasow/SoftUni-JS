function solve(input) {
    let vacationTax = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlesPrice = puzzlesCount * 2.60;
    let dollsPrice = dollsCount * 3;
    let bearsPrice = bearsCount * 4.10;;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;

    let totalCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;
    let totalPrice = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;
    if (totalCount >= 50) {
        totalPrice *= 0.75; 
    }

    let profit = totalPrice * 0.9;
    if (profit >= vacationTax) {
        difference = profit - vacationTax;
        console.log(`Yes! ${difference.toFixed(2)} lv left.`)
    } else {
        difference = vacationTax - profit;
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }
}

solve(["40.8", "20", "25", "30", "50", "10"]);
solve(["320", "8", "2", "5", "5", "1"]);