function finalVal() {
    let validForm = true;
    console.log("Hey, it works! Kinda...");
    let emailVal = document.getElementById('email').value;
    let valEmail =/^([a-zA-Z0-9!#$%.]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,3})$/;
    if(!valEmail.test(emailVal)){
        document.getElementById('emailError').innerText="Please enter a valid email address.";
        validForm = false;
    } else {
        document.getElementById('emailError').innerText="";
    }

    let passSetVal = document.getElementById('passEntry').value;
    let valPass = /^([a-zA-Z0-9!#$%.]{8,10})$/;
    if(!valPass.test(passSetVal)){
        document.getElementById('passEnError').innerText="Passwords must be between 8-10 characters.";
        validForm = false;
    } else {
        document.getElementById('passEnError').innerText="";
    }

    let passMatchVal =  document.getElementById('passVal').value;
    if(passMatchVal != passSetVal) {
        document.getElementById('passValError').innerText="Passwords must match.";
        validForm=false;
    } else {
        document.getElementById('passValError').innerText="";
    }

    let fNameVal = document.getElementById('fName').value;
    let valFName =/([a-zA-Z])/;
    if(!valFName.test(fNameVal)) {
        document.getElementById('fNameError').innerText="Please enter a valid name.";
        validForm=false;
    } else {
        document.getElementById('fNameError').innerText="";
    }

    let lNameVal = document.getElementById('lName').value;
    let valLName=/([a-zA-Z])/
    if(!valLName.test(lNameVal)){
        document.getElementById('lNameError').innerText="Please enter a valid name.";
        validForm=false;
    } else {
        document.getElementById('lNameError').innerText="";
    }

    let zipVal = document.getElementById('zip').value;
    let valZip = /^\d{5}/;
    if(!valZip.test(zipVal)) {
        document.getElementById('zipError').innerText="Please use the 5-digit ZIP Code format."
        validForm=false;
    } else {
        document.getElementById('zipError').innerText="";
    }

    let phoneVal = document.getElementById('pNum').value;
    let valPhone = /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
    if(!valPhone.test(phoneVal)) {
        document.getElementById('pNumError').innerText="Your phone number must be in this format: 555-555-5555";
        validForm = false;
    } else {
        document.getElementById('pNumError').innerText="";
    }

    let CCVal = document.getElementById('CCNum').value
    let valCC = /^(\d{4})-(\d{4})-(\d{4})-(\d{4})$/;
    if(!valCC.test(CCVal)) {
        document.getElementById('CCError').innerText="Please use the 1111-2222-3333-4444 format.";
        validForm=false;
    } else {
        document.getElementById('CCError').innerText="";
    }

    let expVal = document.getElementById('exp').value;
    let valExp = /(0[1-9]|1[0-2])([/])(19|20)\d{2}/;
    if(!valExp.test(expVal)) {
        document.getElementById('expError').innerText="Please use the mm/yyyy format.";
        validForm=false;
    } else {
        document.getElementById('expError').innerText="";
    }



    if(validForm) {
        document.getElementById('grant').innerText="Congratulations! You have successfully registered.";
    } else {
        document.getElementById('deny').innerText="All fields are required and must be completed correctly."
    }
}

function resetPage(){
    location.reload();
}

document.getElementsByTagName('form')[0].addEventListener('submit', function(event){
    event.preventDefault();
    finalVal();
})