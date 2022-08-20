const emailInput = document.querySelector(".p-subscribe__email");
const errorBox = document.querySelector(".p-subscribe__error-message");
const subscribeBtn = document.querySelector(".p-subscribe__btn");

function isValid(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    } else {
        return false;
    }
};

subscribeBtn.addEventListener('click', () => {
    let email = emailInput.value;
    if (!isValid(email)) {
        emailInput.classList.add("p-subscribe__email--error");
        errorBox.textContent = "Please provide a valid email address";
    } else {
        emailInput.classList.remove("p-subscribe__email--error");
        errorBox.textContent = "";
    }
});