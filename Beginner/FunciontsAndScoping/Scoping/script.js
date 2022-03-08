// The way that scope works is that every single time, essentially that you have a set of curly braces like {}, everything inside of them is its own scope. Anytime you have curly braces, you're working inside a particular scope and every function has its own scope.
// Script scope, tag
// Global scope, your entire file
// Local scope, it start to check from inner(current scope) to outer scope
// Inner scope can access to outer scope
// Outer scope can access to inner scope
// var declared at the top level are part of the Global scope
// let and const declared at the top level are part of the script scope
var aa = 4;
let c = 3;
{
    // console.log(b);
    let a = 1;
    {
        let b = 2;
        console.log(a);
        console.log(b);
        console.log(c);
    }
}
