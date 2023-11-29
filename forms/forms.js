function validateForm() {
    let validForm = true;
    console.log("got inside fn");
    let zipVal = document.getElementById('zip').value;
    let valZip =/^\d{5}$/;
    if(!valZip.test(zipVal)) {
        document.getElementById('zipError').innerText="Your zip code must contain five numbers.";
        validForm = false;
    } else {
        document.getElementById('zipError').innerText="";
    }

    let phoneVal = document.getElementById('phone').value;
    let valPhone = /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
    if(!valPhone.test(phoneVal)) {
        document.getElementById('phoneError').innerText="Your phone number must be in this format: 555-555-5555";
        validForm = false;
    } else {
        document.getElementById('phoneError').innerText="";
    }
    let emailVal = document.getElementById('myEmail').value;
    //At least one letter, number, or one of these symbols: ! # $ % .
    //@ symbol
    //At least one letter, number, or dash after the @ and before the period.
    //. period
    //2 or 3 letters after period
    let valEmail = /^([a-zA-Z0-9!#$%.]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,3})$/;
    if(!valEmail.test(emailVal)){
        document.getElementById('emailError').innerText="You must enter a valid email address."
        validForm = false;
    } else {
        document.getElementById('emailError').innerText="";
    }

    let nameVal = document.getElementById('myName').value;
    let addVal = document.getElementById('address').value;
    let cityVal = document.getElementById('city').value;
    
    console.log(typeof(nameVal));
    if(nameVal==""||addVal==""||cityVal=="") {
        validForm=false;
        console.log("we're here");
    }

    if(validForm) {
        let items = document.querySelectorAll('ul li');
        items[0].innerText+=nameVal;
        items[1].innerText+=addVal;
        items[2].innerText+=cityVal;
        items[3].innerText+=zipVal;
        items[4].innerText+=phoneVal;
        items[5].innerText+=emailVal;

        document.getElementsByTagName('div')[0].style.display="block";
    }
}




document.getElementsByTagName('form')[0].addEventListener('submit', function(event){
    //prevent the default form submisssion
    event.preventDefault();
    //function to validate fields
    validateForm();
})