const elementoChute = document.getElementById('chute')

//'window' permite que assim que abrir a página, o serviço de reconhecimento de voz já esteja ativo
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;


const recognition = new SpeechRecognition();

//Reconhecimento de voz a partir da languagem nativa
recognition.lang = 'pt-Br'
//Inicializando
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    //Acessando a informação desejada a partir de várias camadas contidas no Console
    //console.log(e.results[0][0].transcript)
    console.log(e)
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())