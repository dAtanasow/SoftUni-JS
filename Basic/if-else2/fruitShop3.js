function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    if (day == 'Saturday' || day == 'Sunday') {
        if (fruit == 'banana') {
            price = 2.70
        } else if (fruit == 'apple') {
            price = 1.25
        } else if (fruit == 'orange') {
            price = 0.90
        } else if (fruit == 'grapefruit') {
            price = 1.60
        } else if (fruit == 'kiwi') {
            price = 3.00
        } else if (fruit == 'pineapple') {
            price = 5.60
        } else if (fruit == 'grapes') {
            price = 4.20
        } else {
            console.log('error');
        }
    } else {
        if (fruit == 'banana') {
            price = 2.50
        } else if (fruit == 'apple') {
            price = 1.20
        } else if (fruit == 'orange') {
            price = 0.85
        } else if (fruit == 'grapefruit') {
            price = 1.45
        } else if (fruit == 'kiwi') {
            price = 2.70
        } else if (fruit == 'pineapple') {
            price = 5.50
        } else if (fruit == 'grapes') {
            price = 3.85
        } else {
            console.log('error');
        }
    }
    let finalPrice = price * quantity
    console.log(finalPrice.toFixed(2));
}

fruitShop(["apple", "Tuesday", "2"])
fruitShop(["orange", "Sunday", "3"])
fruitShop(["kiwi", "Monday", "2.5"])
fruitShop(["grapes", "Saturday", "0.5"])
fruitShop(["tomato", "Monday", "0.5"])