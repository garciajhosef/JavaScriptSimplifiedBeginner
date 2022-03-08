let printName = name => {
    console.log(name);
};

printName("Chris");

// If you just have one line in your function and that one line is returning something that you want to return. You can actually leave off this return keyword here, and you can get rid of the curly braces
let sum = (a, b) => console.log(a + b);

sum(1, 4);

let printNameHi = name => `Hi ${name}`;

console.log(printNameHi("Chris"));

// Anonymous arrow functions
function func(x, callback) {
    callback(x);
}

func(10, variable => console.log(variable));
