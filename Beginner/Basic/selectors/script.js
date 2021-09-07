const buttons = Array.from(document.querySelectorAll("button"));

//dataset: property(object) which contains every data attribute, convert attributes to camelCase
//can get and set values / save and store data inside of elements using data attributes
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const currentClicks = parseInt(button.dataset.clicks);
        button.dataset.clicks = currentClicks + 1;
    });
});
