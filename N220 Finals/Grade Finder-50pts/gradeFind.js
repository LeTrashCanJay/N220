let gradingScale = ["A", 90, 100, "B", 80, 89, "C", 70, 79, "D", 60, 69, "F", 59, "lower"];
let gradeTable ="<table>";
let row="";
for(let i=0; i<gradingScale.length; i=i+3){
    console.log(gradingScale[i]);
    console.log(gradingScale[i+1]);
    console.log(gradingScale[i+2]);
    row+="<tr><td>"+gradingScale[i]+"</td>";
    row+="<td>"+gradingScale[i+1]+"-"+gradingScale[i+2]+"</td></tr>";
    console.log(row);

    //1. Create td element (data cell) x2
    //2. Insert text x2
    //3. Put text inside td element x2
    //4. Create tr element
    //5. add td el to tr el
    //6. add tr element to table element

    //var gradeTable = document.createElement('table');
    //gradeTable.appendChild(row);
    //document.body.appendChild(gradeTable);

}

gradeTable+=row+"</table>";
document.getElementById('table').innerHTML=gradeTable;
let tr = document.getElementsByTagName('tr');
function gradeFinder() {
    let grade=document.getElementById('grade').value;
    let average = grade/500;
    let percentage = average.toFixed(2)*100;

    document.getElementById('input').innerText=`Input: ${grade}pts`;
    document.getElementById('avg').innerText=`Result: Grade Average: ${percentage}%`;
    
    if(percentage>=90 && percentage <=100) {
        tr[0].style.backgroundColor="red";
        tr[1].style.backgroundColor="white";
        tr[2].style.backgroundColor="white";
        tr[3].style.backgroundColor="white";
        tr[4].style.backgroundColor="white";
    } else if (percentage <90 && percentage>=80) {
        tr[1].style.backgroundColor="red";
        tr[0].style.backgroundColor="white";
        tr[2].style.backgroundColor="white";
        tr[3].style.backgroundColor="white";
        tr[4].style.backgroundColor="white";
    } else if (percentage<80 && percentage>=70) {
        tr[2].style.backgroundColor="red";
        tr[0].style.backgroundColor="white";
        tr[1].style.backgroundColor="white";
        tr[3].style.backgroundColor="white";
        tr[4].style.backgroundColor="white";
    } else if (percentage<70 && percentage>=60) {
        tr[3].style.backgroundColor="red";
        tr[0].style.backgroundColor="white";
        tr[1].style.backgroundColor="white";
        tr[2].style.backgroundColor="white";
        tr[4].style.backgroundColor="white";
    } else if (percentage<60) {
        tr[4].style.backgroundColor="red";
        tr[0].style.backgroundColor="white";
        tr[1].style.backgroundColor="white";
        tr[2].style.backgroundColor="white";
        tr[3].style.backgroundColor="white";
    }
    
}

document.getElementsByTagName('form')[0].addEventListener('submit', function(event){
    event.preventDefault();
    gradeFinder();
})