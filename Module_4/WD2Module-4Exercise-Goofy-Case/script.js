// goofy-case = first and last character capitalized.
// ex: JasoN RedfooT

function goofyCase(text) {
    // take text that was input and turn it to goofy case.
    // output the goofy-case string.
    let firstLetter = text[0].toUpperCase();
    let middle = text.slice(1, text.length-1).toLowerCase();
    let lastLetter = text[text.length-1].toUpperCase();
    return firstLetter + middle +lastLetter;
}

let input = prompt("Enter some text")
let result = goofyCase(input);
    
console.log(result)