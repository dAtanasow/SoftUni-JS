function array(input) {
    let sumOriginal = 0
    let sumModified = 0
    let newArray = [];
    for (let i = 0; i < input.length; i++) {
        let num = Number(input[i]);
        sumOriginal += num
        if (num % 2 == 0) {
            num += i;
        } else {
            num -= i;
        }
        newArray.push(num)
        sumModified += num
        
    }
    console.log(newArray);
    console.log(sumOriginal);
    console.log(sumModified);
}

array([5, 15, 23, 56, 35])
array([-5, 11, 3, 0, 2]
    )