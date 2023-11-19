// The input will be a single string.
// Write a function that cuts the given string into half and reverse the two halves.
// Print each half on a separate line.

function cutAndReverse(str) {
    let leftHalf = str.slice(0, str.length / 2);
    let rightHalf = str.slice(str.length / 2, str.length + 1)
    
    let firstWord = leftHalf.split('').reverse().join('')
    let secWord = rightHalf.split('').reverse().join('')

    console.log(firstWord);
    console.log(secWord);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
