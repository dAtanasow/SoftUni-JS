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