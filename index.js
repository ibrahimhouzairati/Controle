const form = document.querySelector("#contact-form");
const confirmation = document.querySelector("#show-response");
const inputs = document.querySelectorAll("input");
const response = document.querySelector("p");



form.addEventListener("submit", (e) => {
    e.preventDefault();


    let allFilled = true;
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            allFilled = false;
            input.style.borderColor = "red";
        } else {
            input.style.borderColor = "#ff7aa2";
        }
    });

    if (allFilled) {
        confirmation.classList.add("show-message");
    } else {
        confirmation.classList.remove("show-message");
    }

})
