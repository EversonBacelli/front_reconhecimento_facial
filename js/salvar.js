import { comparar } from './comparar.js';


async function salvar(dataURL){
    let resp = dataURL.split(",");
    let data = await comparar(resp[1])
    let match = data[0]
    console.log(data)
    let aluno = data[1].aluno
    
    let nome = aluno.nome
    let matricula = aluno.matricula
    let curso = aluno.curso
    let modulo = aluno.modulo
    let turno = aluno.turno
    

    let dados = document.querySelectorAll('.card-body label')
    dados[0].textContent = "  " + matricula
    dados[1].textContent = "  " +  nome
    dados[2].textContent = "  " +  curso
    dados[3].textContent = "  " +  modulo
    dados[4].textContent = "  " +  turno

    let indice = document.querySelector('.match p')
    indice.textContent = "MATCH: " + parseFloat((match.match)).toFixed(2)
}

export {salvar}