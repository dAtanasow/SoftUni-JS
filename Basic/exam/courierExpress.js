function courierExpress(input) {
    let kg = Number(input[0]);
    let type = input[1];
    let distance = Number(input[2]);
    let priceForKm = 0;
    let add = 0;
    if (type == 'standard') {
        if (kg < 1) {
            priceForKm = 0.03
        } else if (kg <= 10) {
            priceForKm = 0.05;
        } else if (kg < 40) {
            priceForKm = 0.10;
        } else if (kg < 90) {
            priceForKm = 0.15
        } else if (kg < 150) {
            priceForKm = 0.20
        }
    } else if (type == 'express') {
        if (kg < 1) {
            priceForKm = 0.03
            add = 0.8
        } else if (kg <= 10) {
            priceForKm = 0.05;
            add = 0.4
        } else if (kg < 40) {
            priceForKm = 0.10;
            add = 0.05
        } else if (kg < 90) {
            priceForKm = 0.15
            add = 0.02
        } else if (kg < 150) {
            priceForKm = 0.20
            add = 0.01
        }
    }
    let addForKg = priceForKm * add
    let addForKm = kg * addForKg
    let totalAdd = addForKm * distance
    let totalPrice = priceForKm * distance + totalAdd
    console.log(`The delivery of your shipment with weight of ${kg.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`)
}

courierExpress(["20", 
"standard",
"349"])