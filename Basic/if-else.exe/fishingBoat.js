function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let peoples = Number(input[2])
    let price = 0;
    switch (season) {
        case 'Spring': 
        if (peoples <= 6) {
            price = 3000 * 0.9;
        }else if (peoples >= 7 && peoples <= 11) {
            price = 3000 * 0.85;
        } else if (peoples >= 12) {
            price = 3000 * 0.75;
        } break;
        case 'Summer':
        case 'Autumn':
            if (peoples <= 6) {
                price = 4200 * 0.9;
            }else if (peoples >= 7 && peoples <= 11) {
                price = 4200 * 0.85;
            } else if (peoples >= 12) {
                price = 4200 * 0.75;
            } break;
        case 'Winter':
            if (peoples <= 6) {
                price = 2600 * 0.9;
            }else if (peoples >= 7 && peoples <= 11) {
                price = 2600 * 0.85;
            } else if (peoples >= 12) {
                price = 2600 * 0.75;
            } break;
    }
    
    if (peoples % 2 == 0 && season != 'Autumn') {
        price *= 0.95;
    }
    
    if (budget >= price) {
        console.log(`Yes! You have ${Math.abs(budget - price).toFixed(2)} leva left.`);
    } else if (price > budget) {
        console.log(`Not enough money! You need ${Math.abs(price - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["3000", "Summer", "11"])
fishingBoat(["3600", "Autumn", "6"])
fishingBoat(["2000", "Winter", "13"])