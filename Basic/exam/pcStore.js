function pcStore(input) {
    let cpuPrice = Number(input[0]);
    let gpuPrice = Number(input[1]);
    let ramPrice = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = Number(input[4]);
    //let cpuPriceLv = cpuPrice * 1.57;
    //let gpuPriceLv = gpuPrice * 1.57;
    //let cpuAfterDis = cpuPriceLv - cpuPriceLv * discount
    //let gpuAfterDis = gpuPriceLv - gpuPriceLv * discount
    let cpuAndGpuAfterDis = (cpuPrice + gpuPrice - ((cpuPrice + gpuPrice) * discount)) * 1.57
    let ramPriceLv = ramPrice * 1.57 * ramCount
    let totalPrice = cpuAndGpuAfterDis + ramPriceLv
    //let totalPrice = ramPriceLv + cpuAfterDis + gpuAfterDis
    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);
}

pcStore(["200",
"100",
"80",
"1",
"0.01"])
