import  ValidaFormulario from "./valida-campos.js";
import { salvarAposta, generateNumbers, NumeroRandom } from "./salvar-aposta.js";
import removeNumbers from "./remove-numbers.js";
import exibirDadosList, { exibirDadosApuracao } from "./exibir-dados.js";
import sorteio from "./sorteio.js";


document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona os buttons da tela inicial
    const modalBtnRegister = document.querySelector(".register-btn");
    const modalBtnList = document.querySelector(".list-btn");
    const modalBtnNumbers = document.querySelector(".numbers-btn");
    
    // Seleciona os buttons das modais
    const registerBtnNumbersBet = document.querySelector(".register-numbers"); 
    const surpriseBtnNumersBet = document.querySelector(".surprise-btn");
    const resgateBtn = document.querySelector(".resgate-btn");
    
    // Seleciona as modais
    const modalOverlayList = document.querySelector(".modal-overlay-list");
    const modalOverlayNumber = document.querySelector(".modal-overlay-numbers");
    const modalOverlayFinish = document.querySelector(".modal-overlay-finish");
    
    // Seleciona o button de fechar modal
    const closeBtnList = document.querySelector(".close-btn-list");
    const closeBtnNumbers = document.querySelector(".close-btn-numbers");
    const closeBtnFinish = document.querySelector(".close-btn-finish");
    
    // *********************************************************************
    
    // Verifica se o botão "Registrar aposta" foi apertado
    modalBtnRegister.addEventListener("click", (e) => {
        e.preventDefault();
        let dadosaArmazenados = localStorage.getItem('apostadores');

        if(dadosaArmazenados) {
            if(confirm("Confirma para finalizar fase de apostas")) {
                modalOverlayFinish.classList.add("open-modal");
                exibirDadosApuracao(sorteio(), dadosaArmazenados);
            }
        } else {
            alert('Não existem apostas');
        }

    });
    
    // Verifica se o botão "Lista apostas" foi apertado
    modalBtnList.addEventListener("click", () => {
        let dadosaArmazenados = localStorage.getItem('apostadores');
        
        if(dadosaArmazenados) {
            modalOverlayList.classList.add("open-modal");
            let dados = JSON.parse(dadosaArmazenados);
            exibirDadosList(dados); 
        } else {
            alert('Não existem apostas');
        }

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

    // Verifica se o botão 'resgatar prêmio' da modal FINALIZAR APOSTAS foi apertado
    resgateBtn.addEventListener("click", () => {
        // premiacao();
        salvarAposta();

    });

    
    // **** Botões para fechar o modal ****
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


