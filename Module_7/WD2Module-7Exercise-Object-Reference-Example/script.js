function getName(name) {
    name = prompt("Enter your name!");
}

function getPersonName(name) {
    person.name = prompt("Enter your name!");
}

let name = "";
let person = {};

getName(name);
getPersonName(person);

console.log("Name " + name);
console.log("Person " + person.name);