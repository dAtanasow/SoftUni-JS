//Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare
//the first array with the second array.


function elements(arr1, arr2) {
    for (let el of arr1) {
        for (let ele of arr2) {
            if (el === ele) {
                console.log(el);
            }
        }
    }
}

elements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
elements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);