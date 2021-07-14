//create a password var
let password = prompt("Choose a password");

//create a new regex pattern
let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{6,12}$)");

//test the entered password
let testResult = regex.test(password);
// print a boolean value to the console - true if the password is valid, false if it isn't
console.log(testResult);
/* HINTS:
(?=.*[a-z]) : matches letters lowercase .
(?=.*[A-Z]) : matches letters uppercase .
(?=.*[0-9]) : matches digit .
(?=.*[!@#\$%\^&\*_]) : matches special character .
(?=.{6,12}) : matches text length between 6 to 12 .
- for more info about regular expressions visit : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
*/