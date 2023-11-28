let addValueCart = document.querySelectorAll(".button--add");
let decreaseValueCart = document.querySelectorAll(".button--remove");

function addtoCart() {
    addCart(this.nextElementSibling);
}

function removeFromCart() {
    removeCart(this.previousElementSibling);
}

function addCart(card) {
    card.innerText = (parseInt(card.innerText) + 1);
    card.nextElementSibling.disabled = false;
    enableButton(card.nextElementSibling);
}

function removeCart(card) {
    card.innerText = (parseInt(card.innerText) - 1);

    if (card.innerText == 0) {
        card.nextElementSibling.disabled = true;
        disableButton(card.nextElementSibling);
    }
}

function addButtons() {
    for (let i = 0; i < addValueCart.length; i++) {
        addValueCart[i].onclick = addtoCart;
    }
}

function removeButtons() {
    for (let i = 0; i < decreaseValueCart.length; i++) {
        decreaseValueCart[i].onclick = removeFromCart;
        disableButton(decreaseValueCart[i]);
    }
}

function loadButtons() {
    addButtons();
    removeButtons();
}

function disableButton(btn) {
    btn.classList.remove("button--remove");
    btn.classList.add("button--disabled");
    btn.disabled = true;
}

function enableButton(btn) {
    btn.classList.add("button--remove");
    btn.classList.remove("button--disabled");
    btn.disabled = false;
}

function pageLoad() {
    loadButtons();
}

pageLoad();





