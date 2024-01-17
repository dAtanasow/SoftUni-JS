function cookingByNumbers(numAsString, ...op) {
    let operations = {
        chop: num => num / 2,
        dice: num => Math.sqrt(num),
        spice: num => num + 1,
        bake: num => num * 3,
        fillet: num => num * 0.8
    }

    let num = Number(numAsString);

    op.forEach(el => {
        num = operations[el](num);
        console.log(num);
    })

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')