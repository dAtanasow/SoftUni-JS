// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.

function solve(list) {
    
    list.sort((a, b) => a.localeCompare(b))

    for (let i = 0; i < list.length; i++) {
        console.log(`${i + 1}.${list[i]}`);
    }

}

solve(["John", "Bob", "Christina", "Ema"])