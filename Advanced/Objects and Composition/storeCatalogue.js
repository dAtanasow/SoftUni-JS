function storeCatalog(arr) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b))
    let obj = {}
    for (let i = 0; i < sortedArr.length; i++) {
        let element = sortedArr[i].split(' : ').join(': ');

        let firstLetter = element[0]

        if (obj[firstLetter] == undefined) {
            obj[firstLetter] = [];
        }

        obj[firstLetter].push(` ${element}`)
    }

    let output = []

    for (let key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            let element = obj[key]
            output = [...output, key, ...element]
        }
    }

    //console.log(output.join('\n'));
    return output.join('\n')

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
