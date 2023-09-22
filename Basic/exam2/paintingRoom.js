function paintingRoom(input) {
    let packs = Number(input[0])
    let rolls = Number(input[1])
    let glovesPrice = Number(input[2])
    let brushPrice = Number(input[3])

    let paintPrice = 21.50;
    let rollPrice = 5.20;

    let gloves = Math.ceil(rolls * 0.35);
    let brushes = Math.floor(packs * 0.48);

    let sum = packs * paintPrice + rolls * rollPrice + brushes * brushPrice + gloves * glovesPrice
    let delivery = sum * (1 / 15)

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);
}

paintingRoom(['10', '8', '2.2', '5'])