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

export function exibirDadosApuracao(dados) {
    // Lista números sorteados
    // Quantas rodadas de sorteio foram realizadas
    // A quantidade de apostas vencedoras
    // A Lista de apostas vencedoras (Ordenada alfabeticamente) ou mensagem de que não houve vencedores
    // Lista com todos os números apostados, considerando todas as apostas, ordenada do número mais escolhido ao menos escolhido.

    return console.log(dados);
}