const heading = document.getElementById("heading");
const name = document.getElementById("nameField");
const signin = document.getElementById("signInBtn");
const signup = document.getElementById("signUpBtn");

signup.onclick = function(){
    heading.innerHTML = "SignUp";
    nameField.style.display = "block";
}
