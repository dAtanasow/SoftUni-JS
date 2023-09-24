function echoType(param) {
    if (typeof param == 'string') {
        console.log(typeof param);
        console.log(param);
    } else if (typeof param == 'number') {
        console.log(typeof param);
        console.log(param);
    } else {
        console.log(typeof param);
        console.log(`Parameter is not suitable for printing`);
    }
}

echoType('Hello, JavaScript!')
echoType(18)
echoType(null)