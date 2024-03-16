import { validaCPF } from "./valida-cpf.js";
import { ValidaFormulario } from "./valida-campos.js";

const valida = new ValidaFormulario();

// seleciona os buttons
const modalBtnRegister = document.querySelector(".register-btn");
const modalBtnList = document.querySelector(".list-btn");

// Seleciona as modais
const modalOverlayConfirm = document.querySelector(".modal-overlay-confirm");
const modalOverlayList = document.querySelector(".modal-overlay-list");

// Incluir a funcionalidade Surprise e criar modal
const modalOverlaySurprise = document.querySelector(".modal-overlay-surprise");

// Seleciona os inputs
const nameInput = document.querySelector(".name");
const cpfInput = document.querySelector(".cpf");
const cpfNumbers = document.querySelector(".numbers");

// Seleciona o button de fechar modal
const closeBtnConfirm = document.querySelector(".close-btn-confirm");
const closeBtnList = document.querySelector(".close-btn-list");

// Verifica se o botão "Registrar aposta" foi apertado
modalBtnRegister.addEventListener("click", () => {
    modalOverlayConfirm.classList.add("open-modal");
});

// Verifica se o botão "Lista apostas" foi apertado
modalBtnList.addEventListener("click", () => {
    modalOverlayList.classList.add("open-modal");
});

// Verifica se o botão "Surpresinha" foi apertado
// modalOverlaySurprise.addEventListener("click", e => {
//     e.preventDefault();
//     modalOverlaySurprise.classList.add("open-modal");
// });

// Botão para fechar o modal
closeBtnConfirm.addEventListener("click", (e) => {
    e.preventDefault();
    modalOverlayConfirm.classList.remove("open-modal");
});

closeBtnList.addEventListener("click", (e) => {
    e.preventDefault(e);
    modalOverlayList.classList.remove("open-modal");
});


