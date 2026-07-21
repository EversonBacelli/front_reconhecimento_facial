

async function comparar(img){
    let url = 'http://127.0.0.1:5000/comparar'

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

    return data
}

export {comparar}