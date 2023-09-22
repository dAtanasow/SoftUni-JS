function oldBooks(input) {
    let target = input[0];
    let index = 1;
    let book = input[index];
    let bookIsFound = false;
    while (book !== "No More Books") {
        if (book == target) {
            bookIsFound = true;
            break;
        }
        index++
        book = input[index];
    }
    if (bookIsFound == false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }

}

oldBooks(["The Spot",

    "Hunger Games",

    "Harry Potter",

    "Torronto",

    "Spotify",

    "No More Books"])