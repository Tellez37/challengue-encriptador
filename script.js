
function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = inputText.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join('');
    document.getElementById('outputText').value = encryptedText;
}


function decryptText() {
    const encryptedText = document.getElementById('inputText').value;
    const decryptedText = encryptedText.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join('');
    document.getElementById('outputText').value = decryptedText;
}
function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}