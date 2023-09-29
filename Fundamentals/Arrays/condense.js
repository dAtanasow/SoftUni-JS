//Write a program, which receives an array of numbers, and condenses them by summing adjacent couples of
//elements until a single number is obtained. 

//For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain
//{2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13} = {25}.


function condense(nums) {
    let sum = 0
    let condensed = []
    for (let i = 0; i < nums.length - 1; i++) {
        condensed.push(nums[i] + nums[i + 1])
        for (let j = 0; j < condensed.length; j++) {
            sum += condensed[j]
        }
    }
    console.log(sum);
}


condense([2, 10, 3])
condense([5, 0, 4, 1, 2])