document.getElementById("first-section").style.backgroundColor = "red";
let bigElements = document.getElementsByClassName("big");
bigElements[0].style.transform = "scale(1.1, 1.1)";
bigElements[1].style.fontSize = "30px";
document.getElementsByTagName("ul");
//querySelector allows us to use any css selectory and call it. Returns on element
let image = document.querySelector("#first-section img");
image.style.border = "2px solid blue";
//querySelectorAll gives us all the elements with that class.