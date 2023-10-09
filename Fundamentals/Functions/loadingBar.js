function loadingBar(percent) {
    let loadBar = [];
    for (let i = 0; i < 100; i += 10) {
        if (i < percent) {
            loadBar.push('%')
        } else {
            loadBar.push('.')
        }
    }
    if (percent < 100) {
        console.log(`${percent}% [${loadBar.join('')}]`);
        console.log('Still loading...');
    } else {}
    console.log(`${percent}% [${loadBar.join('')}]`);
}

loadingBar(30)
loadingBar(50)
loadingBar(100)