function convert(gbp) {
    let GBP_TO_USD = 1.31

    let usd = gbp * GBP_TO_USD
    console.log(usd.toFixed(3));
}

convert(80)
convert(39)