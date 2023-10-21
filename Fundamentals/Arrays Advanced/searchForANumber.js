function search(arr, nums) {
    let newArr = arr.slice(0, nums[0]);
    newArr.splice(0, nums[1])
    let counter = 0
    for (let num of newArr) {
        if (num == nums[2]) {
            counter++
        }
    }
    console.log(`Number ${nums[2]} occurs ${counter} times.`);
}

search([5, 2, 3, 4, 1, 6],
    [5, 2, 3])
search([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    )