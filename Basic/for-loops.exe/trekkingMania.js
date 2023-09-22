function trekkingMania(input) {
    let allPeoples = 0;
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    for (i = 1; i < input.length; i++) {
        let top = '';
        let peoples = Number(input[i]);
        if (peoples <= 5) {
            top = 'Musala';
            musala += peoples
        } else if (peoples <= 12) {
            top = 'Monblan';
            monblan += peoples
        } else if (peoples <= 25) {
            top = 'Kilimanjaro';
            kilimanjaro += peoples
        } else if (peoples <= 40) {
            top = 'K2';
            k2 += peoples
        } else {
            top = 'Everest';
            everest += peoples
        }
        allPeoples += peoples
    }

    console.log((musala / allPeoples * 100).toFixed(2) + "%");
    console.log((monblan / allPeoples * 100).toFixed(2) + "%");
    console.log((kilimanjaro / allPeoples * 100).toFixed(2) + "%");
    console.log((k2 / allPeoples * 100).toFixed(2) + "%");
    console.log((everest / allPeoples * 100).toFixed(2) + "%");

}

trekkingMania(["5",

    "25",

    "41",

    "31",

    "250",

    "6"])