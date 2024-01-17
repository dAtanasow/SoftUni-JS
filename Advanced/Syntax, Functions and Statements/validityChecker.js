function validityChecker(x1, y1, x2, y2) {
    let res = Math.sqrt(x2 - x1) + Math.sqrt(y2 - y1)

    console.log(res);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);