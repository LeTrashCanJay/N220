function loanPay() {
   var l =document.getElementById('lInput').value;
   var c =document.getElementById('rInput').value;
   var n =document.getElementById('tInput').value;

   let payment = (l * ((c/100) * Math.pow(1+(c/100), n))/(Math.pow(1+(c/100), n)-1))/12;
   let p = payment.toFixed(2);
   document.getElementById('amount').innerText="Loan Amount: $"+l;
   document.getElementById('rate').innerText="Interest Rate: "+c+"%";
   document.getElementById('time').innerText="Loan Term: "+n+" years. (Equates to "+(n*12)+" months.)"
   document.getElementById('results').innerText="Your monthly payment is: $"+p;
}