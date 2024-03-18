import { NumeroRandom } from "./salvar-aposta.js";

export default function sorteio() {
    const todosSorteados = [];
    const todosVencedores = [];

    for (let i = 0; i <= 25; i++) {
        const numbersBet = NumeroRandom();
        const sorteados = [...numbersBet];
        todosSorteados.push(sorteados);

        let dadosaArmazenados = localStorage.getItem('apostadores');
        let dados = JSON.parse(dadosaArmazenados);

        for (let cpf in dados) {
            let apostador = dados[cpf];
            let tamanho = apostador.apostas.length - 1;
            for (let i = 0; i <= tamanho; i++) {
                let ArrayNumeros = apostador.apostas[i].numeros;
                let registro = apostador.apostas[i].registro;

                ArrayNumeros.sort();

                if (ArrayNumeros.toString() === numbersBet.sort().toString()) {
                    if (!todosVencedores.map(vencedor => vencedor.registro).includes(registro)) {
                        todosVencedores.push({
                            nome: apostador.nome,
                            numerosAposta: ArrayNumeros,
                            registro: apostador.apostas[i].registro
                        });
                    }
                }

            }
        }
        // vencedores.sort((a, b) => a.nome.localeCompare(b.nome));

        if (todosVencedores.length > 0) {
            return { vencedores: todosVencedores, todosSorteados };
        } else {
            return "Não houve ganhadores";
        }
    }
}
