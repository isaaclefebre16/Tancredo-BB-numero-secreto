function verificaSeOChutePossuiUmValorValido(Chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        >div>Valor inválido: Fale um número entre ${menorValor} e $ {maiorValor},<div>`

    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}
