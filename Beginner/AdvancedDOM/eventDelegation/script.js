// document.addEventListener("click", (e) => {
//     if (e.target.matches("button")) {
//         console.log("Button clicked");
//     }
// });

// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// document.body.append(newButton);

const buttons = document.querySelectorAll("button");

document.addEventListener("click", (e) => {
    console.log("Clicked document");
});

document.body.addEventListener(
    "click",
    (e) => {
        console.log("Clicked body");
    },
    {
        capture: true,
    }
);

buttons.forEach((button) => {
    button.addEventListener(
        "click",
        () => {
            console.log("Clicked button");
        },
        {
            capture: true,
        }
    );
});
