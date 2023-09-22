function ages(age) {
    let type = ''

    if (age < 0) {
        console.log("out of bounds");
    } else if (age <= 2) {
        type = 'baby'
    } else if (age <= 13) {
        type = 'child'
    } else if (age <= 19) {
        type = 'teenager'
    } else if (age <= 65) {
        type = 'adult'
    } else {
        type = 'elder'
    }
    console.log(type);
}

ages(20)
ages(1)
ages(100)
ages(-1)
