function lowestPricesInCities(data) {

    let result = {}

    for (let tokens of data) {
        let [town, product, price] = tokens.split(' | ')
        price = Number(price)
        if (!result.hasOwnProperty(product)) {
            result[product] = { town, price }
        } else if (result[product].price > price) {
            result[product].price = price;
            result[product].town = town;
        }
    }
    for (let [product, productInfo] of Object.entries(result)) {
        console.log(`${product} -> ${productInfo.price} (${productInfo.town})`);
    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);