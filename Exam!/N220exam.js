let cWinnings = 50;
let wText;
let newWinnings;

document.getElementById('cWinnings').innerHTML = "Current Winnings: "+ cWinnings

function chanceRoll() {
    let ranNum = Math.floor(Math.random()*6)+1;

    switch(ranNum) {
        case 1:
            wText = "It is good to be number 1! You doubled your winnings!";
            cWinnings*=2;
            newWinnings = cWinnings;
            break
        case 2:
            wText = "Second best is not good enough. You lose 20 points."
            cWinnings-=20;
            newWinnings = cWinnings;
            break
        case 3:
            wText = "Three is not a lucky number at all. You lose all your winnings!"
            cWinnings = 0;
            newWinnings = cWinnings;
            break
        case 4:
            wText = "Four is lucky like a four-leafed clover. You won 400 points!"
            cWinnings +=400;
            newWinnings = cWinnings;
            break
        case 5:
            wText = "Five Alive! You are still in the game, but there is no change in your winnings."
            newWinnings = cWinnings;
            break
        case 6: 
            let rNum = prompt("Enter a number between 1 and 50.");
            let myNum = 44;
             
            if (rNum == myNum) {
                wText = "You are lucky indeed! You just multiplied your winnings by your chosen number!"
                cWinnings *= myNum;
                newWinnings = cWinnings;
            } else if (rNum < myNum || rNum <25) {
                wText = "You picked a rather low number, but you win those points."
                cWinnings += Number(rNum);
                newWinnings = cWinnings;
            } else {
                wText = "Good choice - but not what I was hoping for."
                cWinnings -= rNum;
                newWinnings = cWinnings;
            }
            break
        default:
            wText = "Whoops! That didn't work right...";
            break
    }
    document.getElementById('cWinnings').innerHTML = "Current Winnings: "+ cWinnings;
    document.getElementById('rolledNum').innerHTML = "You rolled a "+ranNum+"!";
    document.getElementById('wText').innerHTML = wText;
    document.getElementById('newWinnings').innerHTML = "New Winnings: "+newWinnings;
}

