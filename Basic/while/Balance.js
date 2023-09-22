function balance(input) {
    let index = 1;
    let balance = input[0];
    let total = 0;
    while (balance !== "NoMoreMoney") {
        let amount = Number(balance);
        if (balance === "NoMoreMoney") {
            console.log("NoMoreMoney");
            break;
        }
        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }
        total += amount
        console.log("Increase: " + amount.toFixed(2));
        balance = input[index]
        index++
    

        
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

balance(["5.51",

    "69.42",

    "100",

    "NoMoreMoney"])