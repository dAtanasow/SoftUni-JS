function vacation(input) {
    let tax = Number(input[0]);
    let moneyInStock = Number(input[1]);
    let index = 2;
    let action = input[index];
    let spend = 0;
    let days = 0;


    while (moneyInStock >= 0) {
        days++
        index++

        if (action === 'spend') {
            let moneySpend = Number(input[index])
            moneyInStock -= moneySpend

            if (moneyInStock < 0) {
                moneyInStock = 0;
            }
            spend++

            if (spend === 5) {
                console.log("You can't save the money.");
                console.log(days);
                break;
            }

        } else if (action === 'save') {
            spend = 0;
            let moneySave = Number(input[index])
            moneyInStock += moneySave;

            if (moneyInStock >= tax) {
                console.log(`You saved the money for ${days} days.`);
                break;
            }

        }

        index++
        action = input[index]
    }

}
vacation(["110",

    "60",

    "spend",

    "10",

    "spend",

    "10",

    "spend",

    "10",

    "spend",

    "10",]);