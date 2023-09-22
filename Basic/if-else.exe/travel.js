function travel(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let tax = 0;
    let destination = '';
    let type = '';

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            tax = budget * 0.3;
        } else {
            tax = budget * 0.7;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = 'Balkans';
        if (season == 'summer') {
            tax = budget * 0.4;
        } else {
            tax = budget * 0.8;
        }
    } else {
        destination = 'Europe';
        tax = budget * 0.9;
    }

    if (season == 'summer' && destination != 'Europe') {
        type = 'Camp';
    } else {
        type = 'Hotel';
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${tax.toFixed(2)}`);
}

travel(["50", "summer"])
travel(["75", "winter"])
travel(["312", "summer"])
travel(["678.53", "winter"])
travel(["1500", "summer"])