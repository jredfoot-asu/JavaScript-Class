function getRandomBox() {
    let random = 1 + Math.floor(Math.random() * 4);
    return document.querySelector("#box-" + random)
}
// Remove span children.
let spans = document.querySelectorAll(".box span");
for (let i = 0; i < spans.length; i++) {
    spans[i].remove();
}

// Create an image element.
let image = document.createElement("img");
image.setAttribute("src", "http://placekitten.com/200/200");

// Get a random box.
let randomBox = getRandomBox();

// Make the new image element a child of the box.
randomBox.appendChild(image);