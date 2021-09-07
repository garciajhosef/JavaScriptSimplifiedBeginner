export const me = {
    name: "Kyle",
    age: 25,
};

export const sally = {
    name: "Sally",
    age: 22,
};

function printUser(user) {
    console.log(`Name: ${user.name}. Age: ${user.age}`);
}

export default printUser;
