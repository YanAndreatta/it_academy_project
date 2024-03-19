function cpfLimpo(num) {
  const cpfArray = [];

  // Percorre cada caractere do valor
  for (let i = 0; i < num.length; i++) {
    const char = num.charAt(i);

    // Verifica se o caractere é um número
    if (!isNaN(parseInt(char)) || char.toLowerCase() !== char.toUpperCase()) {
      cpfArray.push(char); // Se for um número, adiciona ao array
    }
  }

  return cpfArray;
}

function multiplyNums(array, plus = 0) {
  const modifArray = [...array];
  modifArray.splice(-2 + plus, Number.MAX_VALUE);

  const multiply = modifArray
    .map(function (valor, indice) {
      if (plus > 0) {
        const newArray = valor * (11 - indice);
        return newArray;
      }
      const newArray = valor * (10 - indice);
      return newArray;
    })
    .reduce((acum, valor) => (acum += valor));
  return multiply;
}

function comparaCPF(a1, a2) {
  return JSON.stringify(a1) === JSON.stringify(a2);
}

export function validaCPF(cpf) {
  if (cpf === "") {
    return false;
  } else {
    const originalCpf = cpfLimpo(cpf);

    // Verifica se todos os dígitos são iguais
    const sequencia = originalCpf[0].repeat(originalCpf.length);
    if (comparaCPF(Array.from(sequencia), originalCpf)) return false;

    // Calcula o primeiro dígito verificador
    let firstSum = multiplyNums(originalCpf);
    let firstDigit = 11 - (firstSum % 11);
    if (firstDigit > 9) firstDigit = 0;

    // Calcula o segundo dígito verificador
    let secondSum = multiplyNums(originalCpf, 1);
    let secondDigit = 11 - (secondSum % 11);
    if (secondDigit > 9) secondDigit = 0;

    // Verifica se os dígitos verificadores calculados coincidem com os fornecidos
    if (
      parseInt(originalCpf[9]) === firstDigit &&
      parseInt(originalCpf[10]) === secondDigit
    ) {
      return true;
    } else {
      return false;
    }
  }
}
