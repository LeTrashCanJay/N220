//Tickets
let x=3; y=14;

document.getElementById("ticketNum").innerHTML += x;
document.getElementById("ticketCost").innerHTML += y;
document.getElementById('ttCost').innerHTML += x*y;

//Shopping
let account=235.87; shirt=35; pants=75; shoes=60; jacket=70;
document.getElementById('bank').innerHTML += account -= (shirt + pants + shoes);

let total = true;
document.getElementById('addJacket').innerHTML += !total;

//Pizza
let pizzas=4; slices = pizzas*8;
document.getElementById('students').innerHTML += Math.floor(slices/2.5);
document.getElementById('profPizza').innerHTML += slices%2.5;

//Monty's
let adult = 12.00; child = 6.00; drinks=1.50
document.getElementById('Monty').innerHTML += (2*adult) + (1*child) + (3*drinks);

//Average Earned Tips
let w1 = 202.45; w2 = 134.97; w3= 256.63; w4= 178.22;
document.getElementById('tips').innerHTML += (w1+w2+w3+w4)/4;