function cinema(input) {
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let ticket = 0;
    
    let allSeats = r * c
    if (type == 'Premiere') {
        ticket = 12;
    } else if (type == 'Normal') {
        ticket = 7.50;
    }else if (type == 'Discount') {
        ticket = 5;
    }
    console.log((ticket * allSeats).toFixed(2));
}

cinema(["Premiere", "10", "12"])
cinema(["Normal", "21", "13"])
cinema(["Discount", "12", "30"])
