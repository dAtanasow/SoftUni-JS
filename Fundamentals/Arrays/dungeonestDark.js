function dungeon(arr) {
    let roomsInfo = arr[0];
    let rooms = roomsInfo.split('|')
    let health = 100;
    let coins = 0
    let bestRoom = 1
    for (let room of rooms) {
        let tokens = room.split(' ')
        let command = tokens[0]
        let value = Number(tokens[1])
        if (command == 'potion') {
            if (health + value >= 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100
                console.log(`Current health: ${health} hp.`);
            } else {
                health += value
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (command == 'chest') {
            coins += value
            console.log(`You found ${value} coins.`);
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
        bestRoom++
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

//dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])