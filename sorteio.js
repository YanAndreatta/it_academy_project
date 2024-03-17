import { NumeroRandom } from "./salvar-aposta.js";

export default function sorteio() {
    const todosSorteados = [];
    const todosVencedores = [];
    // console.log(todosSorteados);
    
    for(let i = 0; i <= 25; i++) {
        const numbersBet = NumeroRandom();
        const sorteados = [...numbersBet];
        todosSorteados.push(sorteados);
    
        let dadosaArmazenados = localStorage.getItem('apostadores');
        let dados = JSON.parse(dadosaArmazenados);
        
        for(let cpf in dados) {
            let apostador = dados[cpf];
            let tamanho = apostador.apostas.length - 1;
            for(let i = 0; i <= tamanho; i++) {
                let ArrayNumeros = apostador.apostas[i].numeros;
                let registro = apostador.apostas[i].registro;
                
                ArrayNumeros.sort();
    
                if(ArrayNumeros.toString() === numbersBet.sort().toString()){
                    if(!todosVencedores.map(vencedor => vencedor.registro).includes(registro)){
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
    
    }

    if(todosVencedores.length > 0) {
        return { vencedores: todosVencedores, todosSorteados};
    } else {
        return 'Não houve ganhadores';
    }

}



// import { NumeroRandom } from "./salvar-aposta.js";

// export default function sorteio() {
//     // const numbersBet = NumeroRandom();
//     const numbersBet = [12, 30, 46, 21, 36];

//     let dadosArmazenados = localStorage.getItem('apostadores');
//     let dados = JSON.parse(dadosArmazenados);

//     let ganhador = null;

//     for(let cpf in dados) {
//         let apostador = dados[cpf];
//         apostador.apostas.forEach(aposta => {
//             if (aposta.numeros.includes(numbersBet)) {
//                 // Se o número sorteado estiver na lista de números da aposta
//                 ganhador = {
//                     nome: apostador.nome,
//                     cpf: apostador.cpf,
//                     registro: aposta.registro
//                 };
//             }
//         });
//     }

//     if (ganhador) {
//         console.log("O ganhador é:");
//         console.log(ganhador);
//     } else {
//         console.log("Nenhum ganhador encontrado.");
//         sorteio();
//     }
// }

