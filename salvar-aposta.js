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
    numerosSelecionados = [];
    while (numerosSelecionados.length < 5) {
        const random = Math.floor(Math.random() * 50) + 1;
        if (!numerosSelecionados.includes(random)) {
            numerosSelecionados.push(random);
        }
    }
    return numerosSelecionados;
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

function obterRegistroApostas() {
    let registro = localStorage.getItem('registroApostas');
    if (!registro) {
        registro = 1000;
        localStorage.setItem('registroApostas', registro);
    }

    return parseInt(registro);
}


// Salva as apostas 
export function salvarAposta() {
    const nome = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;

    if (numerosSelecionados.length !== 5) {
        alert("Selecione exatamente 5 números para salvar a aposta");
        return;
    }

    const novaAposta = { numeros: [...numerosSelecionados], registro: obterRegistroApostas() };
    const apostadores = JSON.parse(localStorage.getItem('apostadores') || "{}");

    // Verifica se o apostador já existe
    if (apostadores[cpf]) {
        apostadores[cpf].apostas.push(novaAposta);
    } else {
        apostadores[cpf] = { nome, cpf, apostas: [novaAposta] };
    }
    
    // inclui o registro para a próxima aposta
    localStorage.setItem('registroApostas', novaAposta.registro + 1);

    // Salva os dados atualizados no LocalStorage
    localStorage.setItem('apostadores', JSON.stringify(apostadores));
    alert(`Aposta salva para o apostador ${nome} ${numerosSelecionados}`);
    
    // Limpar dados para nova aposta
    numerosSelecionados = [];
    document.querySelectorAll('.number.selecionado').forEach(numero => {
        numero.classList.remove("selecionado")
    });
}

