let bank = 45.67;
let toy = 45.99;
let buyToy = bank > toy;

if(buyToy) {
    document.getElementById('bank').innerHTML = "Let's go buy it!";
} else {
    document.getElementById('bank').innerHTML = "Better save for that toy!";
}

//Birthday Month
let today = new Date();
let thisMonth = today.getMonth()+1;

if(thisMonth==7) {
    document.getElementById('birthday').innerHTML = "Have a great birthday month!";
} else {
    document.getElementById('birthday').innerHTML = "No party for you this month...";
}

//Right to Vote
 function checkAge() {
    let myAge = document.getElementById('age').value;

    let ageText;
    if(myAge<18) {
        ageText = "Sorry - you cannot vote.";
    } else if (myAge==18) {
        ageText = "You can finally vote!";
    } else {
        ageText = "Congrats - you can vote!";
    }
    document.getElementById('voteAge').innerHTML = ageText;
 }


//Time of Day
