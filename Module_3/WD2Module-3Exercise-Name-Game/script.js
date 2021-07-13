let firstName = "Jason";
let middleName = "Kristof";
let lastName = "Redfoot";

// concatenation.

let fullName = firstName + " " + middleName + " " + lastName

console.log("Hello " + fullName + "!");

//interpolation
console.log(`Hello ${fullName}!`);

// length
console.log(fullName.length);
console.log(`Your full name is ${fullName.length} characters long.`)

// index
let initials = firstName[0] + middleName[0] + lastName[0];
console.log(`Your initials are ${initials}.`)

// slice
console.log("Sup " + firstName.slice(0,3) +"?");

// reverse first name
console.log(firstName[4].toUpperCase() + firstName[3] + firstName[2] + firstName[1] + firstName[0].toLowerCase());

// escape characters
console.log("J\nA\nS\n\O\nN");

// single quotes + apostrophes
console.log('That\'s so fetch!');

// quotes within strings
// When double quotes on the outside and single on the inside, there is no conflict
console.log("in Wiliam Shapkespear's Hamlet, it was 'to be, or not to be, that is thequestions.'");
//When using either double quotes on the inside and outside or single quotes on inside and outside, there is a conflict and escape characters are needed.
console.log("In the 21st centery, \"to code, or not to code, that is the challenge.\"");
// We can use these but not all browsers support the use of the back tick.
console.log(`Fancy ES6 strings with backticks.
This is the second line of the quote.
Let's type a line with an apostrophe in it.`);
