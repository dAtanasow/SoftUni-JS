function shoping(input) {
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let procesors = Number(input[2]);
    let rams = Number(input[3]);

    let videocardsPrice = videocards * 250;
    let procesorsPrice = procesors * (videocardsPrice * 0.35);
    let ramsPrice = rams * (videocardsPrice * 0.10);

    let totalSum = videocardsPrice + procesorsPrice + ramsPrice;
    if (videocards > procesors) {
        totalSum *= 0.85
    }
    
    if (budget >= totalSum) {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
    }
}

shoping(["900", "2", "1", "3"]);
shoping(["920.45", "3", "1", "1"]);