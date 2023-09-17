const sliderElement = document.querySelector("#slider");
const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizePassword.textContent = sliderElement.value;

sliderElement.addEventListener("input", () => {
    sizePassword.textContent = sliderElement.value;
});

function generatePassword() {
    const passLength = sliderElement.value;
    let pass = "";
    
    for (let i = 0; i < passLength; i++) {
        pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    containerPassword.classList.remove("hide");
    password.textContent = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert("A senha que você gerou foi copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}