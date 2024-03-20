import irParaOutraPagina from "./change-page.js";

const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", () => {
    irParaOutraPagina("/src/js/index.html");
    localStorage.clear();
});