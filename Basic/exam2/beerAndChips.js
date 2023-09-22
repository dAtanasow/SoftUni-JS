function beerAndChips(input) {
    let fanName = input[0];
    let budget = Number(input[1])
    let bottles = Number(input[2])
    let packets = Number(input[3])
    let beerPrice = 1.20;
    let beerSum = bottles * beerPrice
    let chipsPrice = (beerSum * 0.45);
    let chipsSum = Math.ceil(chipsPrice * packets)

    let total = chipsSum + beerSum
    if (total <= budget) {
        console.log(`${fanName} bought a snack and has ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`${fanName} needs ${(total - budget).toFixed(2)} more leva!`)
    }
  
}

beerAndChips(["George",
"10",
"2",
"3"])