const inputText = document.getElementById("id-name");
const inputPrice = document.getElementById("id-price");
const inputStock = document.getElementById("id-stock");
const inputTextAreaShort = document.getElementById("id-short-desc");
const inputTextAreaLong = document.getElementById("id-long-desc");
const buttonValidate = document.getElementById("id-save");
let validationStatus = [false, false, false, false, false];

const regexName = /^[A-Z]([a-zA-Z]|\.| |')+$/;
const regexPrice = /^[0-9]+([,][0-9]+)?$/;
const regexStock = /^[0-9]+([,][0-9]+)?$/;
const regexTextAreaShort = /^[\s\S]{10,100}$/;
const regexTextAreaLong = /^[\s\S]{100,300}$/;

function sendValidate() {
    if (!regexName.test(inputText.value)) {
        inputText.nextElementSibling.innerText = "El Nombre es invalido. Debe comenzar en Mayuscula";
        validationStatus[0] = false;
    } else {
        inputText.nextElementSibling.innerText = "";
        validationStatus[0] = true;
    }

    if (!regexPrice.test(inputPrice.value)) {
        inputPrice.nextElementSibling.innerText = "El precio ingresado es invalido";
        validationStatus[1] = false;
    } else {
        inputPrice.nextElementSibling.innerText = "";
        validationStatus[1] = true;
    }

    if (!regexStock.test(inputStock.value)) {
        inputStock.nextElementSibling.innerText = "El stock ingresado es invalido";
        validationStatus[2] = false;
    } else {
        inputStock.nextElementSibling.innerText = "";
        validationStatus[2] = true;
    }

    if (!regexTextAreaShort.test(inputTextAreaShort.value)) {
        inputTextAreaShort.nextElementSibling.innerText = "Debe contener entre 10 y 100 caracteres";
        validationStatus[3] = false;
    } else {
        inputTextAreaShort.nextElementSibling.innerText = "";
        validationStatus[3] = true;
    }

    if (!regexTextAreaLong.test(inputTextAreaLong.value)) {
        inputTextAreaLong.nextElementSibling.innerText = "Debe contener entre 100 y 300 caracteres";
        validationStatus[4] = false;
    } else {
        inputTextAreaLong.nextElementSibling.innerText = "";
        validationStatus[4] = true;
    }

    if (validationStatus[0] && validationStatus[1] && validationStatus[2] && validationStatus[3] && validationStatus[4]) {
        alert("Se envío correctamente");
        window.location.reload();
    } else {
        alert("Fallo al enviar - Revisar información");
    }
}

buttonValidate.onclick = sendValidate;
