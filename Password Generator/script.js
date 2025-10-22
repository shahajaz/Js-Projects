let passBox = document.getElementById("passBox");
let genBtn = document.getElementById("genBtn");
let rangeBox = document.getElementById("rangeBox");
let rangeValue = document.getElementById("rangeValue");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

rangeValue.innerText = rangeBox.value;
rangeBox.addEventListener("input", () => {
    rangeValue.innerText = rangeBox.value;
});
genBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";