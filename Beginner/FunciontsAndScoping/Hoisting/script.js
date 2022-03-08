// Takes all your functions and move them to the top.
// This doesn't work with arrow functions, because arrow functions are defined as a variable, variables do not get hoisted.
console.log(sum(1, 3));
function sum(a, b) {
    return a + b;
}

let sumArrow = (a, b) => {
    return a + b;
};

console.log(sumArrow(1, 3));
