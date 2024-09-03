const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character");

buttons.forEach((button, indice) => {
    button.addEventListener ("click", () => {
        const characterSelect = document.querySelector(".character.select");
        characterSelect.classList.remove("select");
        const buttonSelect = document.querySelector(".button.select");
        buttonSelect.classList.remove("select");

        button.classList.add("select");
        characters[indice].classList.add("select");

    });
});

