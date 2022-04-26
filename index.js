// Write your solution here
const cats = ["Milo", "Otis", "Garfield"]

destructivelyAppendCat = (name) => cats.push(name);
console.log(destructivelyAppendCat("Ralph"));

console.log(cats);

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

console.log(destructivelyPrependCat("Bob"));
console.log(cats);

function destructivelyRemoveLastCat() {
    return cats.pop()
}
console.log(destructivelyRemoveLastCat());
console.log(cats);

function destructivelyRemoveFirstCat() {
    return cats.shift();
}
console.log(destructivelyRemoveFirstCat());
console.log(cats);

let copyOfCats;

function appendCat(name) {
    copyOfCats = [...cats, (name)]
    return copyOfCats;
}

console.log(appendCat("Broom"));

console.log(copyOfCats);
console.log(cats);

let newCats;

function prependCat(name) {
    newCats = [(name), ...cats]
    return newCats;
}

console.log(prependCat("Arnold"));
console.log(newCats);
console.log(cats);

let amendedCats;

function removeLastCat() {
    amendedCats = cats.slice(0,-1);
    return amendedCats;
}

console.log(removeLastCat());
console.log(amendedCats);
console.log(cats);

let catsCopy;

function removeFirstCat() {
    catsCopy = cats.slice(1, 3);
    return catsCopy;
}

console.log(removeFirstCat());
console.log(catsCopy);
console.log(cats);