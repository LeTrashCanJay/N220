function calculate() {
    let p = document.getElementById('price').value;
    let d = document.getElementById('discount').value;
    let newTotal;

    if(document.getElementById('discount').value=="SAVE20") {
        newTotal = (p-(p*0.2)+(p*0.08));
        let dec1 = newTotal.toFixed(2);
        document.getElementById('input').innerText="Input: $"+p+" and "+d;
        document.getElementById('results').innerText="Results: Your Total: $"+dec1+". You saved $"+((p-newTotal).toFixed(2))+"!";
    }

    if(document.getElementById('discount').value=="CLOSEOUT") {
        newTotal = (p-(p*0.4)+(p*0.08));
        let dec2 = newTotal.toFixed(2);
        document.getElementById('input').innerText="Input: $"+p+" and "+d;
        document.getElementById('results').innerText="Results: Your Total: $"+dec2+". You saved $"+((p-newTotal).toFixed(2))+"!";
    }

    if(document.getElementById('discount').value=="HOLIDAYS") {
        newTotal = (p-(p*0.15)+(p*0.08));
        let dec3 = newTotal.toFixed(2);
        document.getElementById('input').innerText="Input: $"+p+" and "+d;
        document.getElementById('results').innerText="Results: Your Total: $"+dec3+". You saved $"+((p-newTotal).toFixed(2))+"!";
    }

    if(document.getElementById('discount').value=="TESTCODE") {
        newTotal = p;
        document.getElementById('input').innerText="Input: $"+p+" and "+d;
        document.getElementById('results').innerText="Results: Your Total: $"+(p-newTotal)+". You saved $"+p+"!";
    }
    
}

document.getElementsByTagName('form')[0].addEventListener('submit', function(event){
    event.preventDefault();
    calculate();
})