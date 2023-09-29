//Write a program, which receives a number and prints the corresponding name of the day of the week (in English).
//If the number is NOT a valid day, print: "Invalid day!".

function dayOfWeek(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (day > 0 && day < 8) {
        console.log(days[day - 1]);
    } else {
        console.log('Invalid day!');
    }
}

dayOfWeek(3)
dayOfWeek(6)
dayOfWeek(11)