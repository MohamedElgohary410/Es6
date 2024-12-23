document.getElementById("loginform").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let con_pass = document.getElementById("confirm_password").value;
    //===============================================================//
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");
    let confirmError = document.getElementById("confirmError");
    //===============================================================//
    const gmail = /[a-z 0-9]+@[a-z]+.com/;
    var rege = email.match(gmail)
    let validName = false;
    let validEmail = false;
    let validPass = false;
    let validCon = false;
    //===============================================================//
    let firstName = name.split(' ')[0];
    //===============================================================//

    if (!name) {
        nameError.textContent = "Name is Required";
    } else if (name.length <= 2) {
        nameError.textContent = "Name Length Must Be Greater Than 2";
    } else {
        nameError.textContent = "";
        validName = true;
    }
    //===============================================================//
    if (!rege) {
        emailError.textContent = "Email Invalid"
    } else {
        emailError.textContent = ""
        validEmail = true;
    }
    //===============================================================//
    if (!pass) {
        passError.textContent = "password is Required";
    } else if (pass.length <= 7) {
        passError.textContent = "password must be 8 character at least";
    } else {
        passError.textContent = "";
        validPass = true;
    }
    if (!con_pass) {
        confirmError.textContent = "Confirm your password please";

    } else if (con_pass !== pass) {
        confirmError.textContent = "This password is not confirmed with your password"
    } else {
        confirmError.textContent = ""
        validCon = true;
    }

    document.getElementById("goHome").addEventListener("click", function () {
        if (validName && validEmail && validPass && validCon) {
            window.open("/public/home.html", "_self")
            postCookie("userName", firstName)
        }
    })
})

function postCookie(key, value) {
    document.cookie = `${key}=${value}; path=/; SameSite=Strict; Secure`
}