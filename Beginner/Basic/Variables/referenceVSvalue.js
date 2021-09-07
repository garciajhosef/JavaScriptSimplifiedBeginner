const c = [0, 1, 2];
console.log(c);
let d = c;
d.push(3);
d = [0, 2];
console.log(c, d);

const e = {};
e.a = 1;
console.log(e);

const f = [1, 2];
const g = [1, 2];

console.log(f == g);

const h = { name: "chris", age: 25 };
h.color = "red";

//h = { name: "chris", age: 25, color: "red" };
//error because I'm trying to redefine an object declared as constant, that means a new memory address reference

const z = [1, 2]; // 0x01
const elementToAdd = 3; // 3

add(z, elementToAdd);

console.log(z);
console.log(elementToAdd);

function add(array, element) {
    element = element + 1; // 4
    array.push(element); // 0x01
}

// const array = a
// array.push(4)
