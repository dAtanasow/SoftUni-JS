function cinemaTickets(input) {
    let index = 0;
    
    let command = input[index];
    index++

    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let totalTickets = 0;

    while (command !== 'Finish') {
        let film = command
        
        let freeSpace = Number(input[index])
        index++
        
        let type = input[index];
        index++
        
        let totalSellTickets = 0;
        
        while (type !== 'End') {
            totalSellTickets++

            switch (type) {
                case 'student': studentTicket++; break;
                case 'standard': standardTicket++; break;
                case 'kid': kidTicket++; break;
            }

            if (totalSellTickets == freeSpace) {
                break;
            }
        
            type = input[index];
            index++

        }
        totalTickets += totalSellTickets
        let percentFull = totalSellTickets / freeSpace * 100
        console.log(`${film} - ${percentFull.toFixed(2)}% full.`);

        command = input[index];
        index++
    }
    let percentageStudentTicket = studentTicket / totalTickets * 100;
    let percentageStandardTicket = standardTicket / totalTickets * 100;
    let percentageKidTicket = kidTicket / totalTickets * 100;
    
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${percentageStudentTicket.toFixed(2)}% student tickets.`);
    console.log(`${percentageStandardTicket.toFixed(2)}% standard tickets.`);
    console.log(`${percentageKidTicket.toFixed(2)}% kids tickets.`);

}



cinemaTickets(["The Matrix",

    "20",

    "student",

    "standard",

    "kid",

    "kid",

    "student",

    "student",

    "standard",

    "student",

    "End",

    "The Green Mile",

    "17",

    "student",

    "standard",

    "standard",

    "student",

    "standard",

    "student",

    "End",

    "Amadeus",

    "3",

    "standard",

    "standard",

    "standard",

    "Finish"])