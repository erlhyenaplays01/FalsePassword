var userName = prompt("What is your name? ")
var fakePwd = prompt("Set password: ");
var loggedIn = false;
var reqAttempts = prompt("how many times must the correct password be entered?");
var correctAttempts = 0;


while (!loggedIn) {
    var pwdAttempt = prompt("Password, Please: ")

    if (pwdAttempt === fakePwd) {
        correctAttempts++

        if (correctAttempts >= reqAttempts) {
            alert("Success!")
            loggedIn = true;
            alert("Hello, " + userName + ". Your password is " + fakePwd);

        }
    } else {
        alert("incorrect password, please try again.")
    }
} 