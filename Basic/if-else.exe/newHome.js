function newHome(input) {
    let type = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    switch (type) {
        case "Roses":
            if (quantity > 80) {
                price = 5 * 0.9;
            } else {
                price = 5;
            } break;
        case "Dahlias":
            if (quantity > 90) {
                price = 3.80 * 0.85;
            } else {
                price = 3.80;
            } break;
        case "Tulips":
            if (quantity > 80) {
                price = 2.80 * 0.85;
            } else {
                price = 2.80;
            } break;
        case "Narcissus":
            if (quantity < 120) {
                price = 3 * 1.15;
            } else {
                price = 3;
            } break;
        case "Gladiolus":
            if (quantity < 80) {
                price = 2.5 * 1.20;
            } else {
                price = 2.5;
            }
            break;
    }
    let finalSum = price * quantity;
    let difference = (Math.abs(finalSum - budget).toFixed(2))

    if (finalSum > budget) {
        console.log(`Not enough money, you need ${difference} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${quantity} ${type} and ${difference} leva left.`);
    }
}

newHome(["Roses", "55", "250"])
newHome(["Tulips", "88", "260"])