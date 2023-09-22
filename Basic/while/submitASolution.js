function submitASolution(input) {
    let index = 0;
    text = input[index]
    while (text !== 'Stop') {
        index++
        console.log(text);
        text = input[index]
    }
}

submitASolution(["Nakov",

    "SoftUni",

    "Sofia",

    "Bulgaria",

    "SomeText",

    "Stop",

    "AfterStop",

    "Europe",

    "HelloWorld"])