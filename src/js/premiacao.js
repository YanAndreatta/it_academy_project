// Caso os números sorteados contenha o número (pelo menos 2 apostas para contar como número mais sorteado) que mais foi sorteado o prêmio é dobrado

export default function premiacao() {
    let divDados = document.querySelector(".apuracao");
    let html = "";
    // Obter os números mais sorteados do localStorage
    const numerosMaisSorteados = JSON.parse(localStorage.getItem("numerosApostados"));
    // Encontrar o número mais sorteado
    // Obter os valores de vencedores do localStorage
    const vencedores = JSON.parse(localStorage.getItem("vencedores"));

    // Número mais sorteado 
    const numeroMaisSorteado = numerosMaisSorteados[0].numero;

    // iterar sobre as quantidades caso todas sejam valor 1, não houve número mais sorteado
    if(numeroMaisSorteado > 1) {
        html += '<div class="numero-mais-sorteado-container">';
        html += '<p class ="numero-mais-sorteado-txt">Número mais sorteado</p>';
        html += '<p class="numero-mais-sorteado">' + numeroMaisSorteado + "</p>";
        html += "</div>";
        vencedores.forEach(valores => {
            if(valores.numerosAposta.includes(numeroMaisSorteado)){
                console.log("foi");
            }
        });
    } else {
        console.log("Não houve números mais sorteados para ");
    }


    
    // Iterar sobre os números apostados
    html += '<p class="nome-apuracao">Vencedores</p>';
    vencedores.forEach((valores) => {
        html += '<div class="apostador">';
        html += '<p class="nome">' + valores.nome + "</p>";
        
        html += '<div class="aposta">';
        html += '<p><span class="numeros">Números:</span> ' + valores.numerosAposta + "</p>";
        html += "</div>";
        html += "</div>";
    });
    
    
    divDados.innerHTML = html;
}
