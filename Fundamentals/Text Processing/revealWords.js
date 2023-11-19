// Write a function, which receives two parameters.
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.


function revealWords(words, text) {
    let missWords = words.split(', ')
    
    for (let word of missWords) {
        let stars = '*'.repeat(word.length)
        text = text.replace(stars, word)
    }
    
    console.log(text);
}

revealWords('great',

'softuni is ***** place for learning new programming languages')