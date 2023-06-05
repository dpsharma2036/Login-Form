const heading = document.getElementById("heading");
const nameField = document.getElementById("nameField");
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");

signUpBtn.onclick = function(){
    heading.innerHTML = "SignUp";
    nameField.style.display = "block";
}

signInBtn.onclick = function(){
    heading.innerHTML = "Login";
    nameField.style.display = "none";
}