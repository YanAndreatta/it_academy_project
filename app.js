import { validaCPF } from "./valida-cpf.js";
import { ValidaFormulario } from "./valida-campos.js";

const valida = new ValidaFormulario();

// seleciona os buttons
const modalBtnRegister = document.querySelector(".register-btn");
const modalBtnList = document.querySelector(".list-btn");
const modalBtnNumbers = document.querySelector(".numbers-btn");

// Seleciona as modais
const modalOverlayConfirm = document.querySelector(".modal-overlay-confirm");
const modalOverlayList = document.querySelector(".modal-overlay-list");
const modalOverlayNumber = document.querySelector(".modal-overlay-numbers");

// Seleciona os inputs
const nameInput = document.querySelector(".name");
const cpfInput = document.querySelector(".cpf");

// Seleciona o button de fechar modal
const closeBtnConfirm = document.querySelector(".close-btn-confirm");
const closeBtnList = document.querySelector(".close-btn-list");
const closeBtnNumbers = document.querySelector(".close-btn-numbers");

// Verifica se o botão "Registrar aposta" foi apertado
modalBtnRegister.addEventListener("click", () => {
    modalOverlayConfirm.classList.add("open-modal");
});

// Verifica se o botão "Lista apostas" foi apertado
modalBtnList.addEventListener("click", () => {
    modalOverlayList.classList.add("open-modal");
});

// Verifica se o botão "Números da sorte" foi apertado
modalBtnNumbers.addEventListener("click", (e) => {
    modalOverlayNumber.classList.add("open-modal");
});

// Botão para fechar o modal
closeBtnConfirm.addEventListener("click", (e) => {
    e.preventDefault();
    modalOverlayConfirm.classList.remove("open-modal");
});

closeBtnList.addEventListener("click", (e) => {
    e.preventDefault();
    modalOverlayList.classList.remove("open-modal");
});

closeBtnNumbers.addEventListener("click", (e) => {
    e.preventDefault();
    modalOverlayNumber.classList.remove("open-modal");
});


// Função para gerar os números da sorte
function generateNumbers() {
    const numerosContainer = document.getElementById("numbers");

    for(let i = 1; i <= 50; i++) {
        const numeroDiv = document.createElement("div");
        numeroDiv.className.add("number");
        numeroDiv.textContent = i;
        numerosContainer.appendChild(numeroDiv);
    }
}
