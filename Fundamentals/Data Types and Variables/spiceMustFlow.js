function spiceMustFlow(yield) {
    let days = 0
    let savedYield = 0
    while (yield >= 100) {
        days++
        savedYield += yield
        if (savedYield >= 26) {
            savedYield -= 26
        }
        yield -= 10
    }
    if (savedYield >= 26) {
        savedYield -= 26
    }
    console.log(days);
    console.log(savedYield);
}

spiceMustFlow(450)