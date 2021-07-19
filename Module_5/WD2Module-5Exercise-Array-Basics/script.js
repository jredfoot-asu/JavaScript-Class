let favoriteAuthors = ['Pierce Brown', 'Andy Weir', 'Stephen King'];

console.log(favoriteAuthors[1]);
console.log(favoriteAuthors);
console.log(favoriteAuthors.sort());
favoriteAuthors.push('Mary Russell');
console.log(favoriteAuthors);
let smallList = favoriteAuthors.slice(0, 3);
console.log(smallList);
favoriteAuthors.splice(2, 1);
console.log(favoriteAuthors)