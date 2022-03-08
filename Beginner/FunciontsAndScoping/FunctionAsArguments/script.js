function printVariable(variable) {
    console.log(variable);
}

// Create a new function that takes two parameters.
// 1. name
// 2. callback that prints out what we pass to it (printVariable)
// Take name and append "Hello" to the beginning of the name
// If we pass "Kyle" it will print "Hello Kyle"

function sayHi(name, callback) {
    callback(`Hello ${name}`);
}

sayHi("Chris", printVariable);
// If you want to use the result(value) of a function, use curly brackets (). "return".

// Using an anonymous function

sayHi("Chris", function (variable) {
    console.log(variable);
});
