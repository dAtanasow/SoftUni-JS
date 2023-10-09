function addAndSubtract(num1, num2, num3) {
    let result1 = sum(num1, num2)
    let result2 = subtract(result1, num3)
    console.log(result2);
    
    function sum(a, b) {
        return a + b
    }

    function subtract(a, b) {
        return a - b
    }
}

addAndSubtract(23,

    6,

    10)
addAndSubtract(1,

    17,

    30)