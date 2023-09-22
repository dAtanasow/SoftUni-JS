function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let count = Number(input[2]);
    let price = 0;
    
    switch (product) {
        case 'coffee':
            if (town === 'Sofia') {
                price = 0.50;
            } else if (town === 'Plovdiv') {
                price = 0.40;
            } else {
                price = 0.45;
            } break;
        case 'water':
            if (town === 'Sofia') {
                price = 0.80;
            } else if (town === 'Plovdiv') {
                price = 0.70;
            } else {
                price = 0.70;
            } break;
        case 'beer':
            if (town === 'Sofia') {
                price = 1.20;
            } else if (town === 'Plovdiv') {
                price = 1.15;
            } else {
                price = 1.10;
            } break;
        case 'sweets':
            if (town === 'Sofia') {
                price = 1.45;
            } else if (town === 'Plovdiv') {
                price = 1.30;
            } else {
                price = 1.35;
            } break;
        case 'peanuts':
            if (town === 'Sofia') {
                price = 1.60;
            } else if (town === 'Plovdiv') {
                price = 1.50;
            } else {
                price = 1.55;
            } break;
    }
    console.log(count * price);
}

smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "2"]);
smallShop(["water", "Plovdiv", "2"]);
smallShop(["sweets", "Sofia", "2.23"]);