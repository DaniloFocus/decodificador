let inputElement = document.querySelector('#input-text')

// função que faz a criptografia da mensagem
function criptografar () {
    // verifica se o valor inserido é diferente de vazio
    if(inputElement.value != ""){

        let text = inputElement.value
        // realiza a substituição dos caracteres
        let result = text.replace(/e/g,"enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
        let containerOutput = document.querySelector('.container-output')
       
        containerOutput.style.justifyContent = 'space-between'
        containerOutput.style.alignItems = 'center'

        containerOutput.innerHTML = `
            <textarea id="output-text">${result}</textarea>
            <button id="copy"> copiar </button>
        `;

        let outputElement = document.querySelector('#output-text')
        let button = document.querySelector('#copy');
        
        // função que copia o texto inserido
        button.addEventListener('click', function(e) {
            outputElement.select()
            document.execCommand('copy')
        })

    }else {
        alert('Preencha o campo !')
    }
}

// função que faz a descriptografia da mensagem
function descriptografar () {
    let outputElement = document.querySelector('#output-text')
    let text = inputElement.value 
    let result = text.replace(/enter/g,"e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")
    outputElement.innerText = result
}
