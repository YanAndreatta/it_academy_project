// ****** exibe dados da lista de apostas ******
export default function exibirDadosList(dados) {
    let divDados = document.querySelector('.dados');
    let html = '';

// Itera sobre cada apostador
for(let cpf in dados) {
    let apostador = dados[cpf];
    html += '<div class="apostador">';
    html += '<p class="nome">' + apostador.nome + '</p>';
    html += '<p class="cpf">CPF: ' + apostador.cpf + '</p>';

    // Itera sobre cada aposta do apostador
    apostador.apostas.forEach(aposta => {
        html += '<div class="aposta">';
        html += '<p><span class="registro">Registro:</span> ' + aposta.registro + '</p>';
        html += '<p><span class="numeros">Números:</span> ' + aposta.numeros.join(', ') + '</p>';
        html += '</div>';
    });

    html += "</div>"
    }

    divDados.innerHTML = html;
}

// ****** Exibe dados da Apuracao ******
export function exibirDadosApuracao(dadosSorteio, dadosGeral) {
  let divDados = document.querySelector(".apuracao");
  let dados = JSON.parse(dadosGeral);
  let cont = 0;
  let html = "";

// Lista Numeros sorteados
html += '<p><span>Lista números sorteados</span></p>';
dadosSorteio.todosSorteados.forEach(numerosSorteados => {
    html += '<div class="aposta-apuracao">';
    html += '<p><span class="numeros">Números:</span> ' + numerosSorteados.join(", ") + "</p>";
    html += '</div>'
});

// Quantas rodadas de sorteio foram realizadas
html += '<div class="rodadas">';
html += `<p>Quantidade de rodadas</p>`;
html += `<p><span>${dadosSorteio.cont}</span></p>`;
html += "</div>";

// Quantidade de apostas vencedoras
for(let betsWin in dadosSorteio.vencedores) {
    cont++;
}
html += '<div class="rodadas">';
html += '<p> Quantidade de apostas vencedoras</p>'
html += `<p><span>${cont}</span></p>`;
html += "</div>";

// Caso não tenha vencedores
if(!dadosSorteio.vencedores) {
    html += '<div class="apostador-nowin">';
    html += '<p class="nome">Não houve vencedores</p>';
    html += "</div>";
}

// Lista de apostas vencedoras
if(dadosSorteio.vencedores){
    html += '<p class="nome-apuracao">Vencedores</p>';
}
for(let cpf in dadosSorteio.vencedores) {
    let vencedores = dadosSorteio.vencedores[cpf];

    html += '<div class="apostador">';
    html += '<p class="nome">' + vencedores.nome + "</p>";

    html += '<div class="aposta">';
    html += '<p><span class="numeros">Números:</span> ' + vencedores.numerosAposta.join(", ") + "</p>";
    html += "</div>";
    html += "</div>";
  }

// Lista com todos os números apostados, considerando todas as apostas, ordenada do número mais escolhido ao menos escolhido.
const numerosApostados = [];

// Itera sobre todas as apostas
for (let cpf in dados) {
    let apostador = dados[cpf];
    apostador.apostas.forEach(aposta => {
        aposta.numeros.forEach(numero => {
            // Procura se o número já existe no array de contagem
            const index = numerosApostados.findIndex(item => item.numero === numero);
            if (index !== -1) {
                // Incrementa a contagem de apostas para o número existente no array
                numerosApostados[index].quantidade++;
            } else {
                // Adiciona o número ao array de contagem com a quantidade inicializada em 1
                numerosApostados.push({ numero, quantidade: 1 });
            }
        });
    });
}

// Ordena o array com base na quantidade de apostas (do maior para o menor)
numerosApostados.sort((a, b) => b.quantidade - a.quantidade);

html += '<div class= "apostas-quantidade">';
html += '<div class="numeros-txt">Nr apostado</div>';  
html += '<div class="quantidade-txt">Qtd de apostas</div>';
html += '</div>'

// Exibe a lista ordenada
html += '<div class="apostas-quantidade">';   
numerosApostados.forEach(item => {
    html += '<div class="numero-apostado">';
    html += '<p><span class="numeros">Número apostado:</span> ' + item.numero + "</p>";
    html += '</div>'
    html += '<div class="quantidade-apostado">';
    html += '<p><span class="numeros">Qtd vezes apostado:</span> ' + item.quantidade + "</p>";
    html += '</div>'
});
   html += '</div>'


  divDados.innerHTML = html;
}