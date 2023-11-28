let stringText = document.getElementById('string');
let zipText = document.getElementById('zip');
let ccText = document.getElementById('ccard');
let phoneText = document.getElementById('phone');

function validateString() {
    let valString = /^[a-zA-Z]$/;

    document.getElementById('stringAns').innerText = valString.test(stringText.value);
}

stringText.addEventListener('blur',validateString);


function validateZip() {
    //let vz1 = /^[0-9]{5}$/;
    //let vz2 = /^\d{5}$/; //same as above
    //let vz3 = /^([0-9]{5})([- ]?)([0-9]{4})?$/;
    let trueVz = /20037|200378001|20037 8001|20037-8001/;



    document.getElementById('zipAns').innerText = trueVz.test(zipText.value);
}

zipText.addEventListener('blur',validateZip);

//Credit Card

function validateCC() {
    //let vc1=/^(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})$/;
    let trueCC =/1234-1234-1234-1234|1234 1234 1234 1234|1234123412341234/;


    document.getElementById('ccAns').innerText = trueCC.test(ccText.value);
}

ccText.addEventListener('blur',validateCC);

function validatePhone() {
    let truePN = /123-456-7890|(123)456-7890|(123) 456-7890|123.456.7890|1234567890/

    document.getElementById('phoneAns').innerText = truePN.test(phoneText.value);
}

phoneText.addEventListener('blur',validatePhone);

//Months 1-12
let monthRegEx = /0[1-9]|1[0-2]/;

//Date 1-31

let dateRegEx = /[1-9]|[12][0-9]|3[01]/;
//Year 20th-21st Century

let yearRegEx = /(19|20)\d{2}/;