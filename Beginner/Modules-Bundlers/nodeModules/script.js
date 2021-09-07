const userExport = require("./user.js");
const kyle = userExport.me;
const sally = userExport.sally;
const printUser = userExport.printUser;

printUser(kyle);
printUser(sally);
