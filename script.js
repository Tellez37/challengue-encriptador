const textAreaInput = document.getElementById('inputText');
const textAreaOutput = document.getElementById('outputText');
const outputText = document.getElementById('outputText');

const matrizCodificacion = [
    ["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]
];

function encryptText(text) {
    text = text.toLowerCase();
    for(let i = 0; i<matrizCodificacion.length; i++){
        if(text.includes(matrizCodificacion[i][0])){
            text = text.replaceAll(matrizCodificacion[i][0], matrizCodificacion[i][1]);
        }
    }
    return text;
}

function handleBtnEncriptar (){
    textoEncriptado = encryptText(textAreaInput.value);
    textAreaOutput.value = textoEncriptado;
    textAreaInput.value = "";
}


function decryptText(text) {
    text = text.toLowerCase();
    for(let i = 0; i<matrizCodificacion.length; i++){
        if(text.includes(matrizCodificacion[i][1])){
            text = text.replaceAll(matrizCodificacion[i][1], matrizCodificacion[i][0]);
        }
    }
    return text;
}

function handleBtnDesencriptar (){
    textoEncriptado = decryptText(textAreaInput.value);
    textAreaOutput.value = textoEncriptado;
    textAreaInput.value = "";
}

function copyToClipboard() {
    outputText.select();
    document.execCommand('copy');
    textAreaOutput.value = "";
}