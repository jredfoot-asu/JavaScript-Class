let dictionary = {
    egg: "An ovoid o round object laid by a female bird.",
    bacon: "A delicious breakfast side dish.",
    cheese: "A curded and aged bit of animal milk."
};

for (let key in dictionary) {
    console.log(key + ": " + dictionary[key]);
}