function vacation(peoples, type, day) {
    let price = 0;

    switch (day) {
        case 'Friday':
            if (type == 'Students') {
                price = 8.45;
            } else if (type == 'Business') {
                price = 10.9;
            } else if (type == 'Regular') {
                price = 15
            }
            break;
        case 'Saturday':
            if (type == 'Students') {
                price = 9.8;
            } else if (type == 'Business') {
                price = 15.6;
            } else if (type == 'Regular') {
                price = 20;
            }
            break;
        case 'Sunday':
            if (type == 'Students') {
                price = 10.46;
            } else if (type == 'Business') {
                price = 16;
            } else if (type == 'Regular') {
                price = 22.5;
            }
            break;
    }

    let totalPrice = price * peoples

    if (type == 'Students' && peoples >= 30) {
        totalPrice *= 0.85
    } else if (type == 'Business' && peoples >= 100) {
        let dis = price * 10
        totalPrice -= dis
    } else if (type == 'Regular' && (peoples >= 10 && peoples <= 20)) {
        totalPrice *= 0.95
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

//     if (day == "Friday") {
//         switch (type) {
//             case 'Students': price = 8.45; break;
//             case 'Business': price = 10.9; break;
//             case 'Regular': price = 15; break;
//         }
//     } else if (day == "Saturday") {
//         switch (type) {
//             case 'Students': price = 9.8; break;
//             case 'Business': price = 15.6; break;
//             case 'Regular': price = 20; break;
//         }
//     } else if (day == "Sunday") {
//         switch (type) {
//             case 'Students': price = 10.46; break;
//             case 'Business': price = 16; break;
//             case 'Regular': price = 22.5; break;
//         }
//     }
//     let totalPrice = price * peoples
//     if (type == 'Students' && peoples >= 30) {
//         totalPrice *= 0.85
//     } else if (type == 'Business' && peoples >= 100) {
//         let dis = price * 10
//         totalPrice -= dis
//     } else if (type == 'Regular' && (peoples >= 10 && peoples <= 20)) {
//         totalPrice *= 0.95
//     }
//     console.log(`Total price: ${totalPrice.toFixed(2)}`);
// }

vacation(130, "Business", "Sunday");
vacation(40,

    "Regular",

    "Saturday");