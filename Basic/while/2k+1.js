function solve(input) {
    let num = Number(input[0]);
    let index = 1;

    while (index <= num) {

        console.log(index);
        index *= 2
        index++

        if (num < index) {
            break;
        }
    }


}

solve(["31"]);