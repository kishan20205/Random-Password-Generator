const passwordBox = document.getElementById("password");
const length = Math.floor(Math.random() * (16 - 12 + 1)) + 12;

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const number = "0123456789";
const symbole = "!@#$%^&*(){}[]?/\|<>,.-=_+~";
const allChars = upperCase + lowerCase + number + symbole;

function createPassword() {
    let password = "";
    // password += upperCase[Math.floor(Math.random() * upperCase.length)];
    // password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    // password += number[Math.floor(Math.random() * number.length)];
    // password += symbole[Math.floor(Math.random() * symbole.length)];

    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    const textArea = document.createElement("textarea");
    textArea.value = passwordBox.value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}