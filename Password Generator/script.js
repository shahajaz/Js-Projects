let passBox = document.getElementById("passBox");
let genBtn = document.getElementById("genBtn");
let rangeBox = document.getElementById("rangeBox");
let rangeValue = document.getElementById("rangeValue");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let copyIcon = document.getElementById("copyIcon");


rangeValue.innerText = rangeBox.value;
rangeBox.addEventListener("input", () => {
    rangeValue.innerText = rangeBox.value;
});
genBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars === "" || allChars.length == 0) {
        return genPassword;
    }

    let i = 1;
    while(i <= rangeBox.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword; 
}

copyIcon.addEventListener("click", () => {

    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "";
        alert("Password Copied");

        SetTimeout(() => {
            copyIcon.innerText = "content_copy";
            copyIcon.title ="";
        }, 2000)
    }
});