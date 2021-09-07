const me = {
    name: "Kyle",
    age: 25,
};

const sally = {
    name: "Sally",
    age: 22,
};

function printUser(user) {
    console.log(`Name: ${user.name}. Age: ${user.age}`);
}

module.exports = {
    me: me,
    sally: sally,
    printUser: printUser,
};
