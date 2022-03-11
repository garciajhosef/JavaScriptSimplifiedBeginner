// Arrays and objects store a reference to a memory address

let a = 10; // 10
let b = "Hi"; // Hi
let c = { name: "Chris" }; // 0x01 reference to a memory address
let d = c; // 0x01 same memory address than c
d.name = "Joey";

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + JSON.stringify(c));
console.log("d = " + JSON.stringify(d));

// const also store a reference to a memory address,
// it's possible to change what's at that memory address.
// the only time you can change that reference is if you redefine it with the equal sign
// it'll throw an error because it's creating a reference to a new memory address 
const q = [1, 2]; // 0x02
const w = [1, 2]; // 0x03
const e = q;
e.push(3);
console.log(q == w, q === w);
console.log(q);
console.log(w);

// Arrays and objects are pass by reference, its value(memory address) is passed as parameter

function add(array, element) {
    array.push(element);
    array = [2];
    console.log(array);
}

add(q, 44); // 0x02
console.log(q);
