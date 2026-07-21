import {reset} from './utils.js'
import { capturarImagem } from './capturar.js';
import { salvar } from './salvar.js';
import { atualizarBilho, atualizarRotacao } from './updateImg.js';

let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let captureButton = document.getElementById('capture-btn');
const context = canvas.getContext('2d');

let capturar = document.querySelector('.img_camera')
let reiniciar = document.querySelector('.btn_reiniciar')

let updateImg = document.querySelectorAll('#melhorar_img button')
const btn_atualizar = Array.from(updateImg);

let img_melhorar = document.querySelectorAll('.antes_depois img')
let img_update = Array.from(img_melhorar);

var dataURL = null


// 1. Solicitar acesso à câmera do usuário
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then((stream) => {
        // Atribuir o fluxo de vídeo ao elemento <video>
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error("Erro ao acessar a câmera: ", error);
        alert("Não foi possível acessar a câmera. Verifique as permissões.");
    });

// 2. Capturar a imagem ao clicar no botão
captureButton.addEventListener('click', async () => {
    // Fechar captura e Mostrar Imagem
    dataURL = await capturarImagem(video, canvas, capturar, reiniciar, context, dataURL)
    // console.log(dataURL);
});

reiniciar.addEventListener('click', reset)

let btn_save = document.querySelector('#disk')
btn_save.addEventListener('click', async () => {
    await salvar(dataURL)
})

btn_atualizar.forEach(element => {
    
    element.addEventListener('click', async (e) =>{
        //alert(e.target.id)
        const imagemBase64 = canvas.toDataURL('image/jpeg', 1.0);
        img_update[0].src = imagemBase64
        if(e.target.id == 'brilho'){
            let nova_imagem = await atualizarBilho(imagemBase64)
            img_update[1].src = nova_imagem.imagemBase64
        } else {
            let nova_imagem = await atualizarRotacao(imagemBase64)
            img_update[1].src = nova_imagem.imagemBase64
        }
        

        let selectimg = document.querySelector('.antes_depois')
        selectimg.style.display = 'block'
    })
})

img_update.forEach( item => {
    
    item.addEventListener('click', (e) => {
        //console.log(e.target.class)
        //dataURL = e.target.src
        
        const novaImagem = new Image();
  
        novaImagem.src = e.target.src  
        novaImagem.onload = () => {
            // Ajusta o tamanho do canvas para ficar idêntico ao tamanho real da imagem
            canvas.width = novaImagem.width;
            canvas.height = novaImagem.height;

            // Desenha a imagem no canvas começando do ponto zero (topo esquerdo)
            context.drawImage(novaImagem, 0, 0, canvas.width, canvas.height);
            let selectimg = document.querySelector('.antes_depois')
            selectimg.style.display = 'None'
            console.log("Canvas atualizado com sucesso!");
        };

    } )
})