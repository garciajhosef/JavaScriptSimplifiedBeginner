// Closures
// Are defined as functions inside of other functions
// Functions that return a brand new function

function print(variable) {
    let c = 3;
    return function (variable2) {
        console.log(variable);
        console.log(variable2);
        console.log(c);
    };
}

let a = print(1); // print returns a new brand function
a(2); // a is the function returned by print, can be call as a normal function, it has access to the outer scope(print function), including c and variable
