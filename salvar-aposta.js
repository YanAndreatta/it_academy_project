import ValidaFormulario from "./valida-campos.js";

const numerosContainer = document.getElementById("numbers");
let numerosSelecionados = [];

// Marca número selecionado e armazena
function marcaNumero(numeroDiv) {
    const numero = parseInt(numeroDiv.textContent);

    if(numerosSelecionados.includes(numero)) {
        numerosSelecionados = numerosSelecionados.filter(num => num !== numero);
        numeroDiv.classList.remove("selecionado");
    } else {
        if (numerosSelecionados.length < 5) {
            numerosSelecionados.push(numero);
            numeroDiv.classList.add("selecionado");
        } else {
            alert("Aposta máxima de 5 números");
        }
    }
}

// gera números aleatórios
export function NumeroRandom() {
    for (let i = 1; i <= 5; i++) {
        const random = Math.floor(Math.random() * 50) + 1 ;
        numerosSelecionados.push(random);
    }
}

// Gera os números
export function generateNumbers() {

    for(let i = 1; i <= 50; i++) {
        const numeroDiv = document.createElement("div");
        numeroDiv.textContent = i;
        numeroDiv.classList.add("number");
        numerosContainer.appendChild(numeroDiv);
        numeroDiv.addEventListener('click', () => {
            marcaNumero(numeroDiv)
        });
    }
}

// Salva as apostas 
export function salvarAposta() {
    const nome = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;

    if (numerosSelecionados.length !== 5) {
        alert("Selecione exatamente 5 números para salvar a aposta");
        return;
    }

    const novaAposta = { numeros: [...numerosSelecionados] };
    const apostadores = JSON.parse(localStorage.getItem('apostadores') || "{}");
        
    // Verifica se o apostador já existe
    if (apostadores[cpf]) {
        apostadores[cpf].apostas.push(novaAposta);
    } else {
        apostadores[cpf] = { nome, cpf, apostas: [novaAposta] };
    }
    
    // Salva os dados atualizados no LocalStorage
    localStorage.setItem('apostadores', JSON.stringify(apostadores));
    alert(`Aposta salva para o apostador ${nome} ${numerosSelecionados}`);
    
    // Limpar dados para nova aposta
    numerosSelecionados = [];
    document.querySelectorAll('.number.selecionado').forEach(numero => numero.classList.remove("selecionado"));
}

