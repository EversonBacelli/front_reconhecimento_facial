

async function validar(img){
    let url = 'http://127.0.0.1:5000/qualityImage'

    let options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imagemBase64: img
        }) 
    }


    
    let resp = await fetch(url, options)
    let data = await resp.json()

    let inputs = document.querySelectorAll('#div_status input')
        


    if (data.relatorio.brilho == 'Aprovado'){
        inputs[0].checked = true
    }

    if (data.relatorio.conteudo == 'Aprovado'){
        inputs[1].checked = true
    }

    if (data.relatorio.foco == 'Aprovado'){
        inputs[2].checked = true
    }
    
    if (data.relatorio.presenca_rosto == 'Aprovado'){
        inputs[3].checked = true
    }
    
    console.log('BRILHO: ' + data.relatorio.brilho)
    console.log('CONTEUDO: ' + data.relatorio.conteudo)
    console.log("FOCO: " + data.relatorio.foco)
    console.log("PRESENÇA DE ROSTO: " + data.relatorio.presenca_rosto)
    // console.log(data[1])
}

export {validar}