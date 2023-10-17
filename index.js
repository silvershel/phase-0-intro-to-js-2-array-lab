// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const copyOfCats = [...cats];

function destructivelyAppendCat() {
    cats.push('Ralph');
    return cats;
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
    return cats;
  }

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
  }

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
  }

function appendCat() {
    return [...cats, "Broom"];
  }

function prependCat() {
    return ["Arnold", ...cats];
  }

function removeLastCat() {
    copyOfCats.pop();
    return copyOfCats;
  }

function removeFirstCat() {
    return cats.slice(1);
  }