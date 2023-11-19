// The input will be a single string.
// Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and
// should not be printed.
// Finally, print out all the special words you found without the label (#) on a new line.


function hashTag(str) {
    let words = str.split(' ')
    let specWords = []

    for (let word of words) {
        if (word.includes('#') && word.length > 1) {
            specWords.push(word)
        }
    }

    for (let word of specWords) {
        let newWord = word.slice(1);
        let isValid = true;

        for (let char of newWord) {
            if (!/[A-Za-z]/.test(char)) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            console.log(newWord);
        }
    }
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')
