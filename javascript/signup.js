
function validate(){
    // variables
var name = document.getElementById('name').value;
var uname = document.getElementById('uname').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var checkbox = document.getElementById('checkbox');

    // control statement
    if( name.length > 15 || name.length <4)
    {
        alert("Invalid Name");
        return false;
    }
    else if(uname.length < 4 || uname.length>15)
    {
        alert("Invalid Username")
        return false;
    }
    else if(email.length > 35)
    {
        alert("Invalid Email")
        return false;
    }
    else if (password.length > 20 || password.length < 6)
    {
        alert("Invalid Password")
        return false;
    }
    else
    {
       alert("Hello" + " " + uname + " " + "Welcome to Hamro Pasal") 
       return true;
    }
}