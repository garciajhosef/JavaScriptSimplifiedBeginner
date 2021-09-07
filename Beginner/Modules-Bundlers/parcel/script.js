import printUserName, { kyle, sally } from "./user.js";
import { v4 } from "uuid";

printUserName(kyle);
printUserName(sally);
console.log(v4());
