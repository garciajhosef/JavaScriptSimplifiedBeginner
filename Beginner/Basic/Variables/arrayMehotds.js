const a = [1, 2, 3, 4, 5];

//Loop elements, no return anything
a.forEach((number, index) => {
    console.log(index, number);
});

//Loop through our elements and return a brand new array where we perform an operation on each element
const newA = a.map((number) => {
    return number * 2;
});

console.log(newA);

//Loop through our elements and return a brand new filtered array that only contains the elements we want
const newA2 = a.filter((number) => {
    return number >= 2;
});

console.log(newA2);

//Loop through our elements and return the first element that returns true
//Element returned by reference
const newA3 = a.find((number) => {
    return number >= 2;
});

console.log(newA3);

//Loop through our elements and ask if at least one element in the array math with the condition
const newA4 = a.some((number) => {
    return number >= 2;
});

console.log(newA4);

//Loop through our elements and ask if every element in the array math with the condition
const newA5 = a.every((number) => {
    return number >= 2;
});

console.log(newA5);

//Take your array and reducing it down to one singular value by looping through it and doing something each time
//At least two parameters, function and initial value (sum, 0)
//Second parameter is the default value for our first parameter in our function
const newA6 = a.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(newA6);

const items = [
    { price: 10 },
    { price: 20 },
    { price: 14 },
    { price: 1 },
    { price: 6 },
];

const total = items.reduce((sum, item) => {
    return sum + item.price;
}, 0);

console.log(total);

const arrayF = [0, 1, 2, 3, 4, 5];
const isTrue = a.includes(2);
const isTrue2 = a.includes(7);
console.log(isTrue);
console.log(isTrue2);
