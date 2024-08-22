var fakepwdAttempts = 0
var fakePwd = prompt("set password please: ")
var loggedIn = false


alert("Please Log in")
var pwdAttempt = prompt("password?")
if (pwdAttempt = fakePwd) {
    alert("incorrect password")
    var fakepwdAttempts = fakepwdAttempts + 1
    var pwdAttempt = prompt("password?")
    if (pwdAttempt = fakePwd) {
        alert("incorrect password")
        var fakepwdAttempts = fakepwdAttempts + 1
        var pwdAttempt = prompt("password?")
        if (pwdAttempt = fakePwd) {
            alert("incorrect password")
            var fakepwdAttempts = fakepwdAttempts + 1
            var pwdAttempt = prompt("password?")
            if (pwdAttempt = fakePwd){
                alert("success!")
                var loggedIn = true
                alert(fakePwd)
            }
        } else {
            alert("incorrect password")
        } 
    } else {
        alert("incorrect password")
    }
} else {
    alert("incorrect password")
}
