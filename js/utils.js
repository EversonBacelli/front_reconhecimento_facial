
 function iniciarReiniciar(video, canvas, capturar, reiniciar){
    video.style.display = 'None'

    let btn_melhorar = document.querySelector('#melhorar_img')
    btn_melhorar.style.display = 'flex'
    btn_melhorar.style.justifyContent = 'space-around'

    canvas.style.display = 'Block'
    
    //AtualizarBotão
    capturar.style.display = 'None'

    reiniciar.style.display = 'flex';         // 'flex' precisa ser totalmente em minúsculo
    reiniciar.style.flexDirection = 'column';
    reiniciar.style.alignItems = 'center';    // O correto é 'alignItems' (com 'm' e 's'), e não 'alignItens'
    reiniciar.style.justifyContent = 'center';
}

function reset(){
    let video = document.getElementById('video');
    let canvas = document.getElementById('canvas');
    let capturar = document.querySelector('.img_camera')
    let reiniciar = document.querySelector('.btn_reiniciar')
    
    reiniciar.style.display = 'None'
    capturar.style.display = 'Flex'

    video.style.display = 'Flex'
    canvas.style.display = 'None'

    // limpar os dados
    let dados = document.querySelectorAll('.card-body label')
    const arrayItens = Array.from(dados);

    arrayItens.forEach(item => {
        item.textContent = ""
    })

    // limpar os checks
    let inputs = document.querySelectorAll('#div_status input')
    const arrayInputs = Array.from(inputs);

    arrayInputs.forEach(element => {
        element.checked = false
    })

}


function ajustarProporcao(larguraReal, alturaReal, canvas) {
    //const larguraDesejada = 600; // Largura fixa que você quer
    
    // Calcula a altura proporcional exata
    //const alturaProporcional = (alturaReal / larguraReal) * larguraDesejada;
    
    canvas.width = larguraReal;
    canvas.height = alturaReal;
    return canvas
}



export {iniciarReiniciar, reset}