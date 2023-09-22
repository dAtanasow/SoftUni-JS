function puppyCare(input) {
    let foodBayed = Number(input[0])
    let index = 1;
    let command = input[index]
    let eatenFood = 0
    let eatenFoodPerDay = Number(input[index])
    index++
    while (command !== "Adopted") {
        eatenFood += eatenFoodPerDay
        eatenFoodPerDay = Number(input[index])
        command = input[index]
        index++
    }
    foodBayed = foodBayed * 1000
    if (eatenFood <= foodBayed) {
        console.log(`Food is enough! Leftovers: ${foodBayed - eatenFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${eatenFood - foodBayed} grams more.`);
    }
}

puppyCare(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])