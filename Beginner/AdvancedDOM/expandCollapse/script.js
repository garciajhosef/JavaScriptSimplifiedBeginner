document.addEventListener("click", (e) => {
    if (e.target.matches(".expand-button")) expandCard(e);
});

function expandCard(e) {
    const card = e.target.closest(".card");
    const cardBody = card.querySelector(".card-body");
    cardBody.classList.toggle("show");
    // e.target.textContent = cardBody.classList.contains("show")
    //     ? "Collapse"
    //     : "Expand";

    e.target.innerText =
        e.target.innerText === "Expand" ? "Collapse" : "Expand";
}
