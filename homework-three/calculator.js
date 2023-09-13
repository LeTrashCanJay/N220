function intFinal() {
    var prin = document.getElementById('pInput').value;
    var rat = document.getElementById('rInput').value;
    var tim = document.getElementById('tInput').value;
    var gained = (rat * tim)*100;
    gained.toFixed(2);
    let Int = prin * (1+((rat/100)*tim));
    Int.toFixed(2);
    document.getElementById('Interest').innerHTML = "With a starting principal of $" + prin + " and a growth rate of " + rat + "% over a period of " + tim + " years, your total interest will be $" + gained + " with a grand total of $" + Int + ".";
}