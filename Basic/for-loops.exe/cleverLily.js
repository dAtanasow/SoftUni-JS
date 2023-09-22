function cleverLily(input) {
    let age = Number(input[0]);
    let target = Number(input[1]);
    let toyPrice = Number(input[2]);
    let money = 0;
    let toys = 0;

    for (i = 1; i <= age; i++) {
        
        if (i % 2 == 0) {
            money = money + i * 5 
            money --
        } else {
            toys++
        }
        
    }
    let toysPrice = toys * toyPrice;
    let budget = toysPrice + money;
    let diff = Math.abs(budget - target)
    if (budget >= target) { 
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}





cleverLily(["21",

"1570.98",

"3"])