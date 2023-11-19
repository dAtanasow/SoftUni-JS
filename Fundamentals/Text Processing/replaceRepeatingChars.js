// Write a function that receives a single string and replace any sequence of the same letters with a single
// corresponding letter.


function replaceRepeatingChars(str) {
    let set = ''
    let prevLetter = ''
    for (let letter of str) {
        if (letter !== prevLetter) {
            set += letter
            prevLetter = letter
        }
    }
    console.log(set);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')

replaceRepeatingChars('qqqwerqwecccwd')