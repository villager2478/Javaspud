function togglePotatoTheme() {
    document.body.classList.toggle("potato-theme");
}

function toggleFaq() {
    const answer = document.getElementById("faq-answer");
    answer.classList.toggle("hidden");
}

let fontSizeState = 0;

function changeFontSize() {
    fontSizeState++;

    if (fontSizeState === 1) {
        document.body.style.fontSize = "1.2rem";
    } else if (fontSizeState === 2) {
        document.body.style.fontSize = "1.5rem";
    } else {
        document.body.style.fontSize = "1rem";
        fontSizeState = 0;
    }
}
