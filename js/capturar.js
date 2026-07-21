import {iniciarReiniciar, reset} from './utils.js'
import { validar } from './validarImagem.js';


async function capturarImagem(video, canvas, capturar, reiniciar, context, dataURL) {
    // Fechar captura e Mostrar Imagem
    iniciarReiniciar(video, canvas, capturar, reiniciar)

    // atualizar conteúdo da tag Canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Opcional: Pegar a imagem em formato Base64 (ex: para enviar para um servidor)
    dataURL = canvas.toDataURL('image/jpeg');
    let resp = dataURL.split(",");
    await validar(resp[1])
    return dataURL ;
}

export {capturarImagem}