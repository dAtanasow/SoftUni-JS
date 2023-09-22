function pastryShop(input) {
    let type = input[0]
    let count = Number(input[1])
    let day = Number(input[2])
    let price = 0

    if (day <= 15) {
        switch (type) {
            case 'Cake': price = 24; break;
            case 'Souffle': price = 6.66; break;
            case "Baklava": price = 12.60; break;
        }
    } else {
        switch (type) {
            case 'Cake': price = 28.70; break;
            case 'Souffle': price = 9.80; break;
            case "Baklava": price = 16.98; break;
        }
    }

    let sum = count * price

    if (day <= 22) {
        if (sum > 200) {
            sum *= 0.75
        } else if (sum >= 100 && sum <= 200) {
            sum *= 0.85
        }
    }

    if (day <= 15) {
        sum *= 0.9
    }
    console.log(sum.toFixed(2));
}

pastryShop(["Cake",
    "10",
    "15"])
