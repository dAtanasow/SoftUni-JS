function lunchTime(input) {
    let name = input[0];
    let filmLenght = Number(input[1]);
    let restTime = Number(input[2]);
    let lunchTime = restTime / 8;
    let recreationTime = restTime / 4;

    let timeForFilm = restTime - lunchTime - recreationTime;
    if (timeForFilm >= filmLenght) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeForFilm - filmLenght)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(filmLenght - timeForFilm)} more minutes.`);
    }
}

lunchTime(["Game of Thrones", "60", "96"])
lunchTime(["Teen Wolf", "48", "60"])