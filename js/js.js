function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



const action = document.querySelector("#cart-action");
const actionBadge = document.querySelector("#cart-action-badge");
const addToCartButtons = document.querySelectorAll(".product-button");
const products = document.querySelectorAll(".product");

let amountInCart = 0;

const updateAddToCartUI = (button) => {
    button.classList.add("adding");
};

const updateCartUI = () => {

    actionBadge.classList.add("add");

    if (amountInCart) {
        if (action.classList.contains("empty")) {
            action.classList.remove("empty");
        }
    } else {
        if (!action.classList.contains("empty")) {
            action.classList.add("empty");
        }
    }
    actionBadge.innerText = amountInCart;
};

const addToCart = () => {
    amountInCart = amountInCart + 1;
};

action.addEventListener("click", (event) => {
    amountInCart = 0;
    updateCartUI();
});

addToCartButtons.forEach((button) => {

    button.addEventListener("click", (event) => {
        addToCart();
        updateAddToCartUI(button);
    });

    button.addEventListener("animationend", (event) => {
        button.classList.remove("adding");
        updateCartUI();
    });
});

actionBadge.addEventListener("animationend", (event) => {
    actionBadge.classList.remove("add");
});
