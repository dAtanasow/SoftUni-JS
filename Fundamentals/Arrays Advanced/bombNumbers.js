//Write a function that receives two parameters: sequence of numbers and special bomb number with a certain
//power.
//Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors
//from left and right. Detonations are performed from left to right and all detonated numbers disappear.
//The input contains two arrays of numbers. The first contains the initial sequence and the second contains the
//special bomb number and its power.
//The output is the sum of the remaining elements in the sequence.//

function bomb(nums, bombNum) {
    let bomb = bombNum[0];
    let power = bombNum[1];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == bomb) {
            nums.splice(Math.max(0, i - power), power * 2 + 1, 0)
        }
    }

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    console.log(sum);
}

bomb([1, 2, 2, 4, 2, 2,
    2, 9],
    [4, 2])
bomb([1, 4, 4, 2, 8, 9,
    1],
    [9, 3])
 bomb([1, 1, 2, 1, 1, 1,
    2, 1, 1, 1],
    [2, 1]
    )
    bomb([1, 7, 7, 1, 2, 3],
        [7, 1])
        