function regVal(){
    let validReg=true;
    let user1= document.getElementById('user').value;


    let passSetVal = document.getElementById('pass').value;
    let validPass = /^([a-zA-Z0-9!#$%.]{8,10})$/;
    if(!validPass.test(passSetVal)){
        document.getElementById('passError').innerText="Passwords must be between 8-10 characters.";
        validReg = false;
    } else {
        document.getElementById('passError').innerText="";
    }

    let passMatchVal = document.getElementById('passVal').value;
    if(passMatchVal != passSetVal){
        document.getElementById('samePassError').innerText="Passwords must match.";
        validReg=false;
    } else {
        document.getElementById('samePassError').innerText="";
    }

    if(validReg) {
        document.getElementById('registered').innerText="Thank you, "+user1+" for registering.";
    }
}

function loginVal(){
    let validLog =true;
    let userPrime = document.getElementById('user').value;
    let user2 = document.getElementById('user2').value;

    if(user2 != userPrime) {
        document.getElementById('userCheck').innerText="The username is invalid. Please try again.";
        validLog=false;
    } else {
        document.getElementById('userCheck').innerText="";
    }

    let rightPass = document.getElementById('pass').value;
    let checkPass = document.getElementById('pass2').value;

    if(checkPass != rightPass) {
        document.getElementById('wrongPass').innerText="Your password is incorrect. Please try again."
        validLog=false;
    } else {
        document.getElementById('wrongPass').innerText="";
    }

    if(validLog) {
        document.getElementById('logged').innerText="Congratulations! You are logged in."
    }
}


document.getElementsByTagName('form')[0].addEventListener('submit', function(event){
    event.preventDefault();
    regVal();
})