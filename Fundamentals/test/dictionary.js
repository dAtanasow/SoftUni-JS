function dictionary(arr) {
    let wordsAndDefinitions = arr.shift()
    let notebook = {}

    let words = wordsAndDefinitions.split(' | ')
    for (let word of words) {
        let [worD, [definition]] = word.split(': ')
        if (notebook.hasOwnProperty(worD)) {
            notebook[worD].push(definition)
        } else {
            notebook[worD] = definition
        }
    }

    let testWords = arr.shift()
    testWords = testWords.split('|')
    

    let command = arr.shift();
    if (command == 'Test') {
        let entries = Object.entries(notebook)
        for (let [word, definition] of entries) {
            console.log(word +":");
            console.log('-' +definition);
        
        }
    } else if (command == 'Hand Over') {
        let keys = Object.keys(notebook)
        console.log(keys.join(' '));
    }
}

dictionary(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance", "bit | code | tackle", "Test"]);