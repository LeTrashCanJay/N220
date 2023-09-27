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


//Time of Day/Greeting
let tHours = today.getHours();
let greeting;
//tHours = 20;
if(tHours<=12) {
    greeting = "Good Morning!";
} else if (tHours>12 && tHours<=16) {
    greeting = "Good Afternoon!";
} else if (tHours > 16 && tHours<=20) {
    greeting = "Good Evening!"
} else {
    greeting = "Good Night!";
}

document.getElementById('myTime').innerHTML = greeting;

//Student
let midterm = 78;
let final = 87;
let total = midterm+final+47+62;
let myAvg = (total/350)*100;
let studentText;

if (midterm >50 && final >72) {
    studentText = "You passed the class!"
} else {
    studentText = "Sorry, you did not pass the class."
}

console.log(myAvg);

if ((midterm>50 && final>72) || myAvg>80) {
    studentText +="<br/>The class is complete!";
} else {
    studentText +="<br/>The class is not complete.";
}

document.getElementById('msg').innerHTML=studentText;

function newNum() {
    let ranNum = Math.floor(Math.random()*20)+1;
    document.getElementById("rNum20").innerHTML = ranNum;
}

//Dice Roll

function rollDie() {
    var dieImg;
    let rNum = Math.floor(Math.random()*6)+1;
    switch(rNum) {
        case 1:
            dieImg = "die_face_1.png";
            break;
        case 2:
            dieImg = "die_face_2.png";
            break;
        case 3:
            dieImg = "die_face_3.png";
            break;
        case 4:
            dieImg = "die_face_4.png";
            break;
        case 5:
            dieImg = "die_face_5.png";
            break;
        case 6:
            dieImg = "die_face_6.png";
            break;
        default:
            console.log("Something went wrong...");
            break;
    }
    document.getElementById('dice_1').innerHTML = '<img src ="YOU SHALL DIE!/' +dieImg+'"/>';
    rNum = Math.floor(Math.random()*6)+1;
    switch(rNum) {
        case 1:
            dieImg = "die_face_1.png";
            break;
        case 2:
            dieImg = "die_face_2.png";
            break;
        case 3:
            dieImg = "die_face_3.png";
            break;
        case 4:
            dieImg = "die_face_4.png";
            break;
        case 5:
            dieImg = "die_face_5.png";
            break;
        case 6:
            dieImg = "die_face_6.png";
            break;
        default:
            console.log("Something went wrong...");
            break;
    }
    document.getElementById('dice_2').innerHTML = '<img src ="YOU SHALL DIE!/' +dieImg+'"/>';
}

//Seasons

//thisMonth holds this month
var seasonText;
switch(true) {
    case (thisMonth == 12||thisMonth<=2):
        seasonText = "It's Winter";
        break;
    case (thisMonth>=3 && thisMonth<=5):
        seasonText = "It's Spring";
        break;
    case (thisMonth>= 6 && thisMonth<=8):
        seasonText = "It's Summer";
        break;
    case (thisMonth>=9 && thisMonth <=11):
        seasonText = "It's Fall";
        break;
    default:
        seasonText = "This is not an option...";
}

document.getElementById('season').innerHTML = seasonText;