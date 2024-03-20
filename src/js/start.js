const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", () => {
    irParaOutraPagina();
    localStorage.clear();
});

function irParaOutraPagina() {
    // Substitu o estado no histórico 
    history.replaceState(null, null, window.location.href);

    // Redirecionar para a outra página
    window.location.replace("/src/js/index.html");
}