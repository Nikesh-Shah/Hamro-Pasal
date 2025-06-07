
function validate(){
    // variables
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

    // control statement
    if(email.length > 35)
    {
        alert("Invalid Email")
        getElementById('email').style.border="2px solid red";
        return false;
    }
    else if (password.length > 20 || password.length < 6)
    {
        alert("Invalid Password")
    }
    else
    {
        alert("Welcome Back")
        return true;
    }
}