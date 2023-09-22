function walking(input) {
    let index = 0;
    let target = 10000;
    let steps = input[index];
    let daySteps = 0;

    while (daySteps < target) {

        if (steps == "Going home") {
            index++
            let steps = input[index];
            daySteps += Number(steps);
            if (daySteps <= target) {
                console.log(`${target - daySteps} more steps to reach goal.`);
                break;
            } else {
                console.log("Goal reached! Good job!");
                console.log(`${daySteps - target} steps over the goal!`);
                break;
            }
        }

        daySteps += Number(steps);
        index++
        steps = input[index];

        if (daySteps >= target) {
            console.log("Goal reached! Good job!");
            console.log(`${daySteps - target} steps over the goal!`);
            break;
        }
    }
}

walking(["125", "250", "4000", "30", "2678", "4682"])