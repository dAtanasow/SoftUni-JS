function catFood(input) {
    let cats = Number(input[0])
    let foodGr = 0
    let small = 0
    let big = 0
    let giant = 0
    let foodKg = 0

    for (let i = 1; i < input.length; i++) {
        foodGr = Number(input[i]);
        foodKg += foodGr
        if (foodGr >= 100 && foodGr < 200) {
            small++
        } else if (foodGr >= 200 && foodGr < 300) {
            big++
        } else if (foodGr >= 300 && foodGr < 400) {
            giant++
        }
    }
    
    foodKg = foodKg / 1000
    let foodPrice = foodKg * 12.45
    
    console.log(`Group 1: ${small} cats.`)
    console.log(`Group 2: ${big} cats.`)
    console.log(`Group 3: ${giant} cats.`)
    console.log(`Price for food per day: ${foodPrice.toFixed(2)} lv.`);


}

catFood(["6",
    "102",
    "236",
    "123",
    "399",
    "342",
    "222"])