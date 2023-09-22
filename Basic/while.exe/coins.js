function coins(input) {
    let instead = Number(input[0]);
    let coins = Math.floor(instead * 100)
    let coin = 0
    while (coins > 0) {
        if (coins >= 200) {
            coins -= 200
            coin++
        } else if (coins >= 100) {
            coins -= 100
            coin++
        } else if (coins >= 50) {
            coins -= 50
            coin++

        } else if (coins >= 20) {
            coins -= 20
            coin++

        } else if (coins >= 10) {
            coins -= 10
            coin++

        } else if (coins >= 5) {
            coins -= 5
            coin++

        } else if (coins >= 2) {
            coins -= 2
            coin++

        } else if (coins >= 1) {
            coins -= 1
            coin++

        }

        if (coins < 1) {
            console.log(coin);
            break;
        }
    }
}

coins(["2.73"])