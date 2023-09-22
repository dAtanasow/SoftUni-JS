function grandpaStavri(input) {
    let days = Number(input[0]);
    let quantity = Number(input[1]);
    let gradus = Number(input[2]);
    let sumQuantity = 0;
    let sumGradus = 0;

    for (i = 1; i < input.length; i++) {
        quantity = Number(input[i]);
        i++
        gradus = Number(input[i]);

        sumQuantity += quantity
        sumGradus += quantity * gradus
    }
    let avgGradus = sumGradus / sumQuantity

    console.log(`Liter: ${sumQuantity.toFixed(2)}`);
    console.log(`Degrees: ${avgGradus.toFixed(2)}`);
    if (avgGradus < 38) {
        console.log("Not good, you should baking!");
    } else if (avgGradus <= 42) {
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }
}


grandpaStavri(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"])
