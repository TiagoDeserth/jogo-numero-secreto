function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute //Convertendo número para inteiro

    if (chuteForInvalido(numero)) {
        //console.log('Valor inválido')
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        //console.log(`Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}. Por favor, tente outra vez dentro das especificações exigidas.</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `

    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div> O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
        
    }else{
        elementoChute.innerHTML += `
        <div> O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
        
    if (chuteForInvalido(numero)){
        if (chute.toUpperCase() === "Game Over"){
            document.body.innerHTML = `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `
            document.body.style.background = "black";
        }
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})