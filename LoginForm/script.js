let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");

signinBtn.onclick = function(){
    nameField.style.maxHeight="0";
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    nameField.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    signupBtn.classList.remove("disable");
    signupBtn.classList.add("disable");
}