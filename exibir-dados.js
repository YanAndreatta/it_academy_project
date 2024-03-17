export default function exibirDados(dados) {
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