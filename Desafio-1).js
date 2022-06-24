// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça
// {
// K = K + 1;
// SOMA = SOMA + K;
// }
// imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let indice = 13;

for(let k =0; k < indice; k++){
    let soma = 0
    soma += k;
    console.log(soma);
}

// O valor da variável soma ao final do processamento é 12.