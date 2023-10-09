function palindromeIntegers(numArr) {
    for (num of numArr) {
        check(num);

        function check(num) {
            let numStr = String(num);
            let reversedNum = '';

            for (let i = numStr.length - 1; i >= 0; i--) {
                reversedNum += numStr[i]
            }

            let isPalindrome = numStr == reversedNum;
            console.log(isPalindrome);
        }
    }
}
palindromeIntegers([123, 323, 421, 121])
palindromeIntegers([32, 2, 232, 1010])