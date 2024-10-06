function verificaLetraA(texto) {
    const textoMinusculo = texto.toLowerCase();
    const ocorrencias = (textoMinusculo.match(/a/g) || []).length;
    const existe = ocorrencias > 0;
    return { existe, ocorrencias };
}

const stringExemplo = "Fazendo teste de programação em JavaScript";

const resultado = verificaLetraA(stringExemplo);

if (resultado.existe) {
    console.log(`A letra 'a' existe na string e aparece ${resultado.ocorrencias} vezes`);
} else {
    console.log("A letra 'a' não existe na string");
}

