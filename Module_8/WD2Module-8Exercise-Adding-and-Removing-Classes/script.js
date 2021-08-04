let box = document.querySelector(".box")
// Shows the class name that's been selected.
box.className
// Sets the class name to "box mega-phone"
box.className = "box mega-phone"
// Shows class as a list so that selectors can be used.
box.classList
// Adds a css style to the class so that it can be applied and used.
box.classList.add("animate")
box.classList
// Replaces the first class in quotes with the second class in quotes.
box.classList.replace("mega-phone", "heart")
// Removes the class name from the list of class names
box.classList.remove("animate")
// Checks the condition for true/false on if the class has the quoted value in the class list.
box.classList.contains("box")
