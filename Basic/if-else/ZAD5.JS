function solve(input) {
    let budget = Number(input[0]);
    let actors = Number(input[1]);
    let dressPrice = Number(input[2]);
    let decor = budget * 0.10;
    if (actors > 150) {
        dressPrice *= 0.9;
    }
    
    let taxes = decor + dressPrice * actors;
    let difference = Math.abs(budget - taxes).toFixed(2);
    if (taxes > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${difference} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${difference} leva left.`);
    }
}

solve(["20000", "120", "55.5"])
solve(["15437.62", "186", "57.99"])
solve(["9587.88", "222", "55.68"])
