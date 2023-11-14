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
