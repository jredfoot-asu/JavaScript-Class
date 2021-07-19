function inputGrade (examNumber) {
    let grade = prompt("Please enter grade for exam " + examNumber +": ");
    return Number(grade);
}

let grades =  [];

//input grades
grades.push(inputGrade(1));
grades.push(inputGrade(2));
grades.push(inputGrade(3));
grades.push(inputGrade(4));

// Drop lowest grade.
grades.sort(function(a,b){
    return a-b;
}) ;
let finalGrades = grades.slice(1);
console.log(finalGrades);
let average = (finalGrades[0] + finalGrades[1] + finalGrades[2])/3;
alert("The final grade is " + average)