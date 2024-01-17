// Write a JS function that adds and removes numbers to/from an array. You will receive a command which can either be "add" or "remove".

// The initial number is 1.

// Upon receiving an "add" command you should add the current number to your array. Upon receiving the "remove" command you should remove the last entered number, currently existent in the array

// Each input command should increase that number, regardless of what it is.

// The input comes as an array of strings. Each element holds a command.

// The output is the element of the array, each printed on a new line. In case of an empty array, just print "Empty".

function solve(arr) {
    let buff = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'add') {
            buff.push(i + 1)
        } else if (arr[i] == 'remove') {
            buff.pop()
        }
    }

    if (buff.join('') == '') {
        console.log('Empty');
    } else {
        console.log(`${buff.join('\n')}`);
    }
}

solve(['add', 'add', 'add', 'add'])
console.log('-----');
solve(['add', 'add', 'remove', 'add', 'add'])
console.log('-----');
solve(['remove', 'remove', 'remove'])
