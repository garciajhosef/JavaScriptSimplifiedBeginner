function printVariable(variable) {
    console.log(variable);
}

function func(x) {
    x("hello world");
}

func(printVariable);

function sumCallback(a, b, callback) {
    callback(a + b);
}

function handleSum(sum) {
    console.log(sum);
}

sumCallback(1, 2, handleSum);

function printName(name, callback) {
    callback("Hello " + name);
}

printName("chris", printVariable);

printName("chirs", function (variable) {
    console.log(variable);
});
