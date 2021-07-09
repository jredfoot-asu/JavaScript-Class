// avaerage = sum / count
// 2 + 4 / 2

let sum = 0;
let count = 0;
let tempNum = 0;

tempNum = Number(prompt("Please enter your first number: "));
sum += tempNum;
count++;

tempNum = Number(prompt("Please enter your first second: "));
sum += tempNum;
count++;

tempNum = Number(prompt("Please enter your first third: "));
sum += tempNum;
count++;

let average = sum / count;
console.log("The average is: " + average);