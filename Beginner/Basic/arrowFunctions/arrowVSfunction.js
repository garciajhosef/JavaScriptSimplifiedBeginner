const button = document.querySelector("button");

button.addEventListener("click", function (e) {
    console.log("Normal function");
    console.log(this, e.target); //this == e.target
});

button.addEventListener("click", (e) => {
    console.log("Arrow function");
    console.log(this, e.target); //this == global window
});
