var aText = document.getElementById('answers');

let grades = [78, 86, 92, 77];
aText.innerHTML = "Array: " + grades;
aText.innerHTML += "<br/>Second Value: " + grades[1]; 
grades[1] = 83;
aText.innerHTML += "<br/>Array: " + grades;
aText.innerHTML += "<br/>Array Length: " + grades.length;
let lastGrade = grades.length-1; //3
let lgValue = ++ grades[lastGrade];
aText.innerHTML += "<br/>Last Grade Change: " + lgValue;
aText.innerHTML += "<br/>Array: " + grades;
aText.innerHTML += "<br/>Third Value: " + grades[2]; 
let gradeTotal = grades[0]+grades[1]+grades[2]+grades[3];
aText.innerHTML += "<br/>Array Average: " + (gradeTotal/grades.length); 
aText.innerHTML += "<br/>Above Average: " + ((gradeTotal/grades.length)>80); 

let tops = ['t-shirts', 'sweater', 'sweatshirt', 'blouse', 'button-down', 'hoodie'];

let exText = document.getElementById('extraAnswers');

//Add Value to End
tops.push('tank');
exText.innerHTML += "Array Push: " + tops;

//Remove last value
tops.pop();
exText.innerHTML += "<br/>Array Pop: " + tops;

//Removes first value
tops.shift();
exText.innerHTML += "<br/>Array Shift: " + tops;

//Add value at beginning
tops.unshift('T-Shirt');
exText.innerHTML+="<br/> Array Unshift: " + tops;

//Add/Delete in middle
tops.splice(2,1); //Delete sweatshirt
exText.innerHTML+="<br/> Delete Sweatshirt: " + tops;

tops.splice(3,0, "sweatshirt",'tank');
exText.innerHTML+="<br/> Add Sweatshirt and Tank: " + tops;

let bottoms = ['jeans', 'shorts', 'skirts', 'slacks', 'sweatpants'];

let outfits = [tops, bottoms];

document.write(outfits[0][1] + " " + outfits[1][3]);

//OBJECTS

const friend = {
    fName: "William",
    lName: "Stevens",
    age: 27,
    student: false,
    fullName: function() {
        return this.fName + " " + this.lName;
    }
}

console.log(friend.fullName()+ " is " + friend.age + " years old.");

const car = {
    year: 2020,
    make: "Dodge",
    model: "Charger",
    automatic: false,
    mpg: 19,
    efficiency: function () {
        return (this.mpg>40);
    }
}

document.getElementById('car').innerHTML = "I own a " + car.year + " " + car.make + " " + car.model +".";

document.getElementById('carEff').innerHTML = car.make + " "+car.model+" Efficiency: " + car.efficiency();