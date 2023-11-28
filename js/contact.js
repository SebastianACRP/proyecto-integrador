const inputText = document.getElementById("name_id");
const inputEmail = document.getElementById("email_id");
const inputTextArea = document.getElementById("consultation_id");
const buttonValidate = document.getElementById ("id-save");
let validationStatus = [false, false, false];

const regexName = /^[A-Z]([a-zA-Z]|\.| |')+$/;
const regexEmail = /^[a-z0-9._-]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;
const regexTextArea = /^[\s\S]{20,100}$/;

function sendValidate() {
    if (!regexName.test(inputText.value)) {
        inputText.nextElementSibling.innerText = "El Nombre es invalido. Debe comenzar en Mayuscula";
        validationStatus[0] = false;
    } else {
        inputText.nextElementSibling.innerText = "";
        validationStatus[0] = true;
    }

    if (!regexEmail.test(inputEmail.value)) {
        inputEmail.nextElementSibling.innerText = "El Email ingresado es invalido";
        validationStatus[1] = false;
    } else {
        inputEmail.nextElementSibling.innerText = "";
        validationStatus[1] = true;
    }

    if (!regexTextArea.test(inputTextArea.value)) {
        inputTextArea.nextElementSibling.innerText = "Debe contener entre 20 y 250 caracteres";
        validationStatus[2] = false;
    } else {
        inputTextArea.nextElementSibling.innerText = "";
        validationStatus[2] = true;
    }

    if (validationStatus[0] && validationStatus[1] && validationStatus[2]) {
        alert("Se envío su consulta");
        window.location.reload();
    } else {
        alert("Fallo al enviar-Revisar información");
    }
}

buttonValidate.onclick = sendValidate;
