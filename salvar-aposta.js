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
        }
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

export function salvarAposta() {
    const nome = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;

    if (numerosSelecionados.length !== 5) {
        alert("Selecione exatamente 5 números para salvar a aposta");
        return false;
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
    console.log("Aposta salva para o apostador", nome + ":", numerosSelecionados);
    
    // Limpar dados para nova aposta
    numerosSelecionados = [];
    document.querySelectorAll('.number.selecionado').forEach(numero => numero.classList.remove("selecionado"));
}
