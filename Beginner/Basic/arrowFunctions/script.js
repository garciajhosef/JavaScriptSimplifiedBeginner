const sumArrow = (a, b) => a + b;

let sum = sumArrow(1, 2);
console.log(sum);

let s = () => {
    console.log(variable);
};
function s2() {
    const variable = 2;
    console.log(variable);
}

let variable = 12;
s();
s2();
