let totalCount = 0;


console.log("Connected");

function validateForm() {
    const userName = document.getElementById("userName").value;
    const userid = document.getElementById("userid").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let hasunameError = true;
    let hasuidError = true;
    let hasemailError = true;
    let haspassError = true;

    console.log(userName, userid, email, password);

    if (!userName) {
        document.getElementById("unameError").innerHTML = "User Name is required";
        hasunameError = true;
    } else if (userName.length < 4) {
        document.getElementById("unameError").innerHTML = "User Name should be at least 4 char long";
        hasunameError = true;
    } else {
        document.getElementById("unameError").innerHTML = "";
        hasunameError = false;
    }

    if (!userid) {
        document.getElementById("uidError").innerHTML = "user id is required";
        hasuidError = true;
    }
    else {
        document.getElementById("uidError").innerHTML = "";
        hasuidError = false;
    }

    if (!email) {
        document.getElementById("emailError").innerHTML = "email is required";
        hasemailError = true;
    } else {
        document.getElementById("emailError").innerHTML = "";
        hasemailError = false;
    }

    if (!password) {
        document.getElementById("passError").innerHTML = "password is required";
        haspassError = true;
    } else {
        document.getElementById("passError").innerHTML = "";
        haspassError = false;
    }

    if (!hasunameError && !hasuidError && !hasemailError && !haspassError) {
        document.getElementById("totalRegitrations").innerHTML = ++totalCount
    }


    return false;

}