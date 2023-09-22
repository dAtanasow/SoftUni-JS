function excursionSale(input) {
    let sTicketPrice = 680;
    let mTicketPrice = 499;
    let index = 0
    let sTickets = Number(input[index]);
    index++
    let mTickets = Number(input[index]);
    index++
    let command = input[index];
    let allProfit = 0
    while (command !== 'Stop') {
        let type = command

        if (type == 'mountain') {
            if (mTickets == 0) {
                index++
                command = input[index];
                continue;
            } else {
                mTickets--
                allProfit += mTicketPrice
            }
        } else {
            if (sTickets == 0) {
                index++
                command = input[index];
                continue;
            } else {
                sTickets--
                allProfit += sTicketPrice
            }
        }
        if (sTickets == 0 && mTickets == 0) {
            console.log("Good job! Everything is sold.");
            break;
        }

        index++
        command = input[index];


    }
    console.log(`Profit: ${allProfit} leva.`);
}

excursionSale(["7",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain",
    "sea", "Stop"])