function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let review = input[2];
    let nightCost

    if (type == 'apartment') {
        if (days < 10) {
            nightCost = 25 * 0.7;
        } else if (days >= 10 && days <= 15) {
            nightCost = 25 * 0.65;
        } else {
            nightCost = 25 * 0.5;
        }
    } else if (type == 'president apartment') {
        if (days < 10) {
            nightCost = 35 * 0.9;
        } else if (days >= 10 && days <= 15) {
            nightCost = 35 * 0.85;
        } else {
            nightCost = 35 * 0.8;
        }
    } else {
        nightCost = 18;
    }

    if (review == 'positive') {
        nightCost *= 1.25;
    } else if (review == 'negative') {
        nightCost *= 0.9;
    }
    console.log((nightCost * (days - 1)).toFixed(2));
}

skiTrip(["14", "apartment", "positive"])
skiTrip(["30", "president apartment", "negative"])
skiTrip(["12", "room for one person", "positive"])
skiTrip(["2", "apartment", "positive"])