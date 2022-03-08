"use strict";
// Create a function that takes no arguments and prints your name

function printName() {
    console.log("Chris");
}

printName();

function sum(a, b) {
    console.log(a + b);
}

sum(2, 3);

// Create a function that takes one argument (a person's name) and prints that out
function printNameArgument(name, age) {
    console.log(name, age);
}

printNameArgument("Chris");

// Create a function that takes a single argument (name) it will return that name added to the end of the string "Hello"
// Set it to a variable and log it out afterward.

function nameConcatenated(name) {
    return `Hello ${name}`;
}

const name = nameConcatenated("Chris");
console.log(name);
