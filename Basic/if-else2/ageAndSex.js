function ageAndSex(input) {
    let age = Number(input[0]);
    let sex = input[1];

    switch (sex) {
        case 'm':
            if (age >= 16) {
                console.log("Mr.");
            } else {
                console.log("Master");
            } break;
        case 'f':
            if (age >= 16) {
                console.log("Ms.");
            } else {
                console.log("Miss");
            } break;
    }
}

ageAndSex(["12", "f"]);
ageAndSex(["17", "m"]);
ageAndSex(["25", "f"]);
ageAndSex(["13.5", "m"]);