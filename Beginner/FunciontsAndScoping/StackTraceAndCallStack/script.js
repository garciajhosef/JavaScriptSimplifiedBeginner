// Debugging techniques
// Stack tracer (shown on console)
// Call Stack (shown on source), could be by errors or adding breakpoints

function doStuff(a, b, name) {
    error;
    print(sum(a, b));
    print(sayHi(name));
}

function print(variable) {
    console.log(variable);
}

function sum(a, b) {
    return a + b;
}

function sayHi(name) {
    return `Hi ${name}`;
}

doStuff(1, 2, "Chris");
