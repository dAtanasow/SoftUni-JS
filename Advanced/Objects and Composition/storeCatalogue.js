function storeCatalog(arr) {
    let result = {}
    for (let tokens of arr) {
        let [product, price] = tokens.split(' : ');
        price = Number(price)
        result[product] = price
    }

    Object.keys(result).sort((a, b) => a.localeCompare(b))

    console.log(result);
}

storeCatalog(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']

);
