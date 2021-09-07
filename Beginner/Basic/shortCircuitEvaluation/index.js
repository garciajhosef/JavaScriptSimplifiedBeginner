const person = {
    name: {
        firstName: "Chris",
        lastName: "Garcia",
    },
};
const circuitVariable = person && person.name && person.name.lastName;
console.log(circuitVariable);
