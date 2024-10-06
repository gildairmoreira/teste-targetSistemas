function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    
    if (numero === 0 || numero === 1) {
        return true;
    }
    
    let proximo = a + b;
    while (proximo <= numero) {
        if (proximo === numero) {
            return true;
        }
        a = b;
        b = proximo;
        proximo = a + b;
    }
    
    return false;
}

const numeroVerificar = 21;

if (verificaFibonacci(numeroVerificar)) {
    console.log(`${numeroVerificar} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroVerificar} não pertence à sequência de Fibonacci.`);
}