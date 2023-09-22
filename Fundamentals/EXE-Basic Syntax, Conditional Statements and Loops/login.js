function login(input) {
    let username = input[0];

    let index = 1;
    let tempPass = input[index];
    index++
    let pass = ''
    let wrongPassCount = 0

    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i]
    }

    while (tempPass != pass) {
        wrongPassCount++
        if (wrongPassCount == 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log("Incorrect password. Try again.");
        tempPass = input[index];
        index++
    }

    console.log(`User ${username} logged in.`);
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);