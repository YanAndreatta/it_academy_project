import  ValidaFormulario from "./valida-campos.js";
import { salvarAposta, generateNumbers, NumeroRandom } from "./salvar-aposta.js";
import removeNumbers from "./remove-numbers.js";

document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona os buttons da tela inicial
    const modalBtnRegister = document.querySelector(".register-btn");
    const modalBtnList = document.querySelector(".list-btn");
    const modalBtnNumbers = document.querySelector(".numbers-btn");
    
    // Seleciona os buttons das modais
    const registerBtnNumbersBet = document.querySelector(".register-numbers"); 
    const surpriseBtnNumersBet = document.querySelector(".surprise-btn");
    
    // Seleciona as modais
    const modalOverlayConfirm = document.querySelector(".modal-overlay-confirm");
    const modalOverlayList = document.querySelector(".modal-overlay-list");
    const modalOverlayNumber = document.querySelector(".modal-overlay-numbers");
    
    // Seleciona o button de fechar modal
    const closeBtnConfirm = document.querySelector(".close-btn-confirm");
    const closeBtnList = document.querySelector(".close-btn-list");
    const closeBtnNumbers = document.querySelector(".close-btn-numbers");
    
    // *********************************************************************
    
    // Verifica se o botão "Registrar aposta" foi apertado
    modalBtnRegister.addEventListener("click", () => {
        modalOverlayConfirm.classList.add("open-modal");
    });
    
    // Verifica se o botão "Lista apostas" foi apertado
    modalBtnList.addEventListener("click", () => {
        modalOverlayList.classList.add("open-modal");
    });
    
    // Verifica se o botão "Números da sorte" foi apertado
    modalBtnNumbers.addEventListener("click", () => {
        const valida = new ValidaFormulario();
        if(valida.isValid()){
            modalOverlayNumber.classList.add("open-modal");
            generateNumbers();
        } else {
            alert("Você deve inserir um nome e um CPF válido para apostar");
        }
    });
    
    // Verifica se o botão 'registrar números' da modal NÚMEROS DA SORTE foi apertado 
    registerBtnNumbersBet.addEventListener("click", () => {
        salvarAposta();
    });
    
    // Verifica se o botão 'surpresinha' da modal NÚMEROS DA SORTE foi apertado
    surpriseBtnNumersBet.addEventListener("click", () => {
        NumeroRandom();
        salvarAposta();
    });
    
    // **** Botões para fechar o modal ****
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

        // remove os números da cartela quando o modal é fechado
        removeNumbers();
    });
});

