function factorialDivision(num1, num2) {
    let result1 = multiply(num1)
    let result2 = multiply(num2)
    let finalRes = result1 / result2
    
    console.log(finalRes.toFixed(2));

    function multiply(num) {
        let result = num
        for (let i = 2; i < num; i++) {
            result *= i
        }
        return result
    }
}

factorialDivision(5, 2)
factorialDivision(6, 2)