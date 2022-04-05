const firstBtn = document.querySelector(".first-screen__btn");
const firstScreen = document.querySelector(".first-screen");

firstBtn?.addEventListener("click", () => {
    firstScreen.classList.toggle("run--demo");
});
