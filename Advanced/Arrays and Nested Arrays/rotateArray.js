function rotate(arr, num) {
    for (let i = 0; i < num; i++) {
        let x = arr.pop()
        arr.unshift(x)
    }
    console.log(arr.join(" "));
}

rotate(['1', '2', '3', '4'], 2)
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15)