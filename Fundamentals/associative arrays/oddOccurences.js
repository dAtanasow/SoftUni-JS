// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).

// The input comes as a single string. The words will be separated by a single space.

function occurrences(str) {
    let words = str.toLowerCase().split(" ");
    let freqObject = {}
    let oddFreqWords = [];

    for (let word of words) {
        if (!freqObject[word]) {
            freqObject[word] = 0;
        } else {
            freqObject[word]++
        }
    }
    for (let [word, freq] of Object.entries(freqObject)) {
        if (freq % 2 == 1) {
            oddFreqWords.push(word)
        }
    }

    console.log(oddFreqWords);
}
occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')