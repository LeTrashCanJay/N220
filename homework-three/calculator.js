function intFinal() {
    var prin = document.getElementById('pInput').value;
    var rat = document.getElementById('rInput').value;
    var tim = document.getElementById('tInput').value;
    var gained = ((rat/100) * tim)*1000;
    let g = gained.toFixed(2);
    let Int = prin * (1+((rat/100)*tim));
    let i = Int.toFixed(2);
    document.getElementById('Interest').innerHTML = "With a starting principal of $" + prin + " and a growth rate of " + rat + "% over a period of " + tim + " years, your total interest will be $" + g + " with a grand total of $" + i + ".";
}
