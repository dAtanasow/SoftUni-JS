function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit == 'banana') {
                price = quantity * 2.50
            } else if (fruit == 'apple') {
                price = quantity * 1.20
            } else if (fruit == 'orange') {
                price = quantity * 0.85
            } else if (fruit == 'grapefruit') {
                price = quantity * 1.45
            } else if (fruit == 'kiwi') {
                price = quantity * 2.70
            } else if (fruit == 'pineapple') {
                price = quantity * 5.50
            } else if (fruit == 'grapes') {
                price = quantity * 3.85
            } else {
                console.log('error');
            }
            break;
        case "Saturday":
        case "Sunday":
            if (fruit == 'banana') {
                price = quantity * 2.70
            } else if (fruit == 'apple') {
                price = quantity * 1.25
            } else if (fruit == 'orange') {
                price = quantity * 0.90
            } else if (fruit == 'grapefruit') {
                price = quantity * 1.60
            } else if (fruit == 'kiwi') {
                price = quantity * 3
            } else if (fruit == 'pineapple') {
                price = quantity * 5.60
            } else if (fruit == 'grapes') {
                price = quantity * 4.20
            } else {
                console.log('error');
            }
            break;
        default: console.log('error'); break;
    }
    console.log(price.toFixed(2));
}

fruitShop(["apple", "Tuesday", "2"])
fruitShop(["orange", "Sunday", "3"])
fruitShop(["kiwi", "Monday", "2.5"])
fruitShop(["grapes", "Saturday", "0.5"])
fruitShop(["tomato", "Monday", "0.5"])