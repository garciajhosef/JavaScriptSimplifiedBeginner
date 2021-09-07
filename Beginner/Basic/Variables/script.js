let numberVariable = 1;
let stringVariable = "String variable";
let booleanVariable = true;

//console.log(false && true);

let nullVariable = null;
let undefinedVariable = undefined;

// console.log(nullVariable == undefinedVariable);
// console.log(nullVariable === undefinedVariable);

const a = 0;
const b = false;
console.log(a == b);

const c = null;
const d = undefined;
console.log(c == d);

const arrayA = [0, 1, 2, 3, 4, 5];

const person = {
    name: "chris",
    age: 25,
    favoriteColor: "blue",
    sayHi: function () {
        console.log("Hi");
    },
    sayHi2() {
        console.log("Hi");
    },
};

person.sayHi2();

const car = {
    make: "Nissan",
    model: "370z",
    isUsed: true,
    makeNoise() {
        console.log("Vroom");
    },
};

const book = {
    title: "Lord of the rings",
    author: {
        name: "J. R. R. Tolkien",
        age: 81,
    },
};

book.title = "Harry Potter";

console.log(book);
