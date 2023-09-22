function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit == 'banana') {
                console.log((quantity * 2.50).toFixed(2));
            } else if (fruit == 'apple') {
                console.log((quantity * 1.20).toFixed(2));
            } else if (fruit == 'orange') {
                console.log((quantity * 0.85).toFixed(2));
            } else if (fruit == 'grapefruit') {
                console.log((quantity * 1.45).toFixed(2));
            } else if (fruit == 'kiwi') {
                console.log((quantity * 2.70).toFixed(2));
            } else if (fruit == 'pineapple') {
                console.log((quantity * 5.50).toFixed(2));
            } else if (fruit == 'grapes') {
                console.log((quantity * 3.85).toFixed(2));
            } else {
                console.log('error');
            } break;

        case "Saturday":
        case "Sunday":
            if (fruit == 'banana') {
                console.log((quantity * 2.70).toFixed(2));
            } else if (fruit == 'apple') {
                console.log((quantity * 1.25).toFixed(2));
            } else if (fruit == 'orange') {
                console.log((quantity * 0.90).toFixed(2));
            } else if (fruit == 'grapefruit') {
                console.log((quantity * 1.60).toFixed(2));
            } else if (fruit == 'kiwi') {
                console.log((quantity * 3).toFixed(2));
            } else if (fruit == 'pineapple') {
                console.log((quantity * 5.60).toFixed(2));
            } else if (fruit == 'grapes') {
                console.log((quantity * 4.20).toFixed(2));
            } else {
                console.log('error');
            } break;
        default: console.log('error'); break;
    }
}

fruitShop(["apple", "Tuesday", "2"])
fruitShop(["orange", "Sunday", "3"])
fruitShop(["kiwi", "Monday", "2.5"])
fruitShop(["grapes", "Saturday", "0.5"])
fruitShop(["tomato", "Monday", "0.5"])