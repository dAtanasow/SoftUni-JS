function huntingGames(arr) {
    let days = arr.shift();
    let players = arr.shift();
    let energy = arr.shift();
    let waterPerDay = arr.shift();
    let foodPerDay = arr.shift();
    let totalWater = waterPerDay * players * days
    let totalFood = foodPerDay * players * days

    let currentDay = 1
    for (let i = 0; i < arr.length; i++) {
        energy -= arr[i];
        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            break;
        }
        if (currentDay % 2 == 0) {
            energy += energy * 0.05;
            totalWater *= 0.7;
        }
        if (currentDay % 3 == 0) {
            totalFood -= foodPerDay * players;
            energy *= 1.1
        }
        currentDay++
    }
    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }
}

huntingGames(['10', '7', '5035.5', '11.3', '7.2', '942.3', '500.57', '520.68', '540.87', '505.99', '630.3', '784.20', '321.21', '456.8', '330']);
