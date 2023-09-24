function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let lose = 0
    let sum = 0
    while (lostFights > lose) {
        lose++
        if (lose % 12 == 0) {
            sum += armorPrice
        }
        if (lose % 6 == 0) {
            sum += shieldPrice
        }
        if (lose % 3 == 0) {
            sum += swordPrice
        }
        if (lose % 2 == 0) {
            sum += helmetPrice
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);

}

gladiatorExpenses(23,

    12.50,
    
    21.50,
    
    40,
    
    200)