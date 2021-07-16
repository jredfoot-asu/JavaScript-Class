// Write a function that takes in a Sneetch's name (string), and returns that name with a star (string).
function sneetchStarrer(sneetchName) {
  return sneetchName + " ⭐️";
}

let result = sneetchStarrer("Vada");
console.log(result);
console.log(sneetchStarrer("Buster"));

// Write a function that takes in 2 ingredients and 1 secret ingredient.  The function should output the ingredients to the console between bread emojis.
function sandwhichMaker(ingredient1, ingredient2, secretIngredient) {
  console.log(`🍞 ${ingredient1}, ${ingredient2}, ${secretIngredient} 🍞`);
}

sandwhichMaker('Avacado', 'Pickels', 'Jalepenos');

// Write a function that inputs a temperature in Celcius and outputs that temperature in Farenheit.
function tempInFarenheit(degreesInCelcius) {
  let degreesInFarenheit = (degreesInCelcius * 1.8) +32;
  return degreesInFarenheit;
}
console.log(tempInFarenheit(0))
console.log(tempInFarenheit(100))

// Write a function that takes in a plainString and makes it fancy!
function fancyString(plainString) {
  console.log(`💅🏼 ${plainString} 💅🏼`)
}

fancyString("Pickel Rick!")
fancyString("I <3 JavaScript!")