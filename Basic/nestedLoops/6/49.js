function solve(input) {
    let counter = 0
    for (a = 1; a < + 49; a++) {
        for (b = 1; b < + 49; b++) {
            for (c = 1; c < + 49; c++) {
                for (d = 1; d < + 49; d++) {
                    for (e = 1; e < + 49; e++) {
                        for (f = 1; f < + 49; f++) {
                            counter++
                            if (a !== b && a !== c && a !== d && a !== e && a !== f && b !== c && b !== d && b !== e && b !== f && d !== e && d !== f && e !== f) {
                                //console.log(`${counter} : ${a},${b},${c},${d},${e},${f}`);
                            }

                        }

                    }

                }

            }
        }
        console.log(counter);
    }
}

solve();