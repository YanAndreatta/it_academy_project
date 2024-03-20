import irParaOutraPagina from "./change-page.js";
import premiacao from "./premiacao.js";

const endBtn = document.querySelector(".end-btn");

endBtn.addEventListener("click", () => {
    irParaOutraPagina("/html/start/start.html");
});

premiacao();