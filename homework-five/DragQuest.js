let tools;

function enterCave() {
    let cave1 = prompt("You bravely enter the cave! Lighting a torch, you see that the walls are wide and have been carved out by age and... other factors. Do you CONTINUE or TURN back?");

    if(cave1.toUpperCase()=="CONTINUE") {
        innerCave1();
    } else {
        goHome();
    }
}

function innerCave1() {
    let cave2 = prompt("As you go deeper into the cave, you hear the shriek again! Running deeper, you find a split path. Which do you choose: LEFT or RIGHT?");

    if(cave2.toUpperCase()=="LEFT") {
        alert("You chose the left path. You continue deeper into the cave.");
        innerCave2();
    } else if (cave2.toUpperCase()=="RIGHT") {
        alert("You chose the right path. You feel rocks crumble under your feet and give way to a massive underground cavern!")
        rockfall();
    } else {
        alert("You lose focus and your torch goes out... This may spell the end of your adventure.");
    }
}

function rockfall() {
    let check1 = prompt("You feel the ground shake under you... Time to roll! Roll your D20 and enter your result to see if you succeed passing through the collapsing cavern!");

    if (check1 <=5) {
        alert("You trip on your feet and the rocks crumble under you, dropping you into a dark pit. Your adventure ends here...");
    } else if (check1>5 && check1<=9) {
        alert("You make it past, but you are injured. Too injured to continue on... Your adventure ends here...");
    } else if (check1 ==10) {
        alert("You narrowly make it, although slightly injured. You can still continue on.");
        lairInjured();
    } else if (check1 >10 && check1 <20) {
        alert("You make it past the rockfall and go deeper into the cave.");
        lair();
    } else if (check1 ==20) {
        alert("A natural 20! You leap past the rockfall and enter the dragon's lair.");
        lair();
    } else {
        alert("You lose track of what's occuring and fall into a dark pit. Your adventure ends here...");
    }
}

function innerCave2() {
    let march = prompt("In this section of the caverns, you see a bright light at the end of this corridor. Do you MARCH forward or RETREAT?");

    if (march.toUpperCase()=="MARCH") {
        alert("You continue into the bright cavern.");
        lair();
    } else {
        goHome();
    }
}

function lair() {
    alert("You have reached the midsts of the cave system. Inside this large opening, you see a large mountain of gold and a fair maiden atop it. She notices you and cries out for your help! However... her cries alert the beast waiting inside... A DRAGON!!!!");

    if (tools.toUpperCase()=="STAFF") {
        staffBattle();
    } else if (tools.toUpperCase()=="SWORD") {
        swordBattle();
    } else if (tools.toUpperCase()=="SHIELD") {
        shieldBattle();
    }
}

function lairInjured() {
    alert("You have reached the midsts of the cave system. Inside this large opening, you see a large mountain of gold and a fair maiden atop it. She notices you and cries out for your help! However... her cries alert the beast waiting inside... A DRAGON!!!!");
    alert("You have sustained injuries... When asked to roll, you must roll with disadvantage. That means you roll two sets of d20 and keep the lowest number.");

    if (tools.toUpperCase()=="STAFF") {
        staffBattle();
    } else if (tools.toUpperCase()=="SWORD") {
        swordBattle();
    } else if (tools.toUpperCase()=="SHIELD") {
        shieldBattle();
    }
}

function staffBattle() {
    alert("The dragon roars at you. It is time to defend yourself!");
    let check2 = prompt("Roll a d20 to see if you succeed in any attacks! Enter your result below.");

    if (check2 ==1) {
        alert("You thrust the staff forward... but it breaks apart in your hand. The dragon takes the opportunity to swallow you and the maiden whole. Your adventure ends here...");
    } else if (check2>1 && check2<10) {
        alert("You thrust the staff forward... but only small sparks come out. The dragon takes the opportunity to swallow you and the maiden whole. Your adventure ends here...");
    } else if (check2>=10 && check2<20) {
        alert("You thrust the staff forward... and a bolt of magic files from the gemstone atop it! It stuns the dragon, giving you time to escape with the maiden!");
        escapeLair();
    } else if (check2 ==20) {
        alert("A natural 20! You thrust the staff forward and a bolt of golden lightning flies from the gemstone atop it! You slay the dragon in one attack! The maiden runs down the golden mountain to embrace you.");
        escape20();
    } else {
        alert("You get confused and the dragon takes the opportunity to swallow you and the maiden whole. Your adventure ends here...");
    }
}

function swordBattle() {
    alert("The dragon roars at you. It is time to defend yourself!");
    let check3 = prompt("Roll a d20 to see if you succeed in any attacks! Enter your result below.");

    if (check3 ==1) {
        alert("You swing your sword at the dragon... but you miss and trip over your untied shoelaces. The dragon takes the opportunity to swallow you and the maiden whole. Your adventure ends here...");
    } else if (check3>1 && check3<10) {
        alert("You swing your sword at the dragon... But it glances off the tough scales. The dragon takes the opportunity to swallow you and the maiden whole. Your adventure ends here...");
    } else if (check3>=10 && check3<20) {
        alert("You stab your sword into the dragon! It stuns the beast, giving you time to escape with the maiden!");
        escapeLair();
    } else if (check3 ==20) {
        alert("A natural 20! You jump up and swipe your sword across it's neck! You slay the dragon in one attack! The maiden runs down the golden mountain to embrace you.");
        escape20();
    } else {
        alert("You get confused and the dragon takes the opportunity to swallow you and the maiden whole. Your adventure ends here...");
    }
}

function shieldBattle() {
    alert("The dragon roars at you. It is time to defend yourself!");
    let check4 = prompt("Roll a d20 to see if you succeed in any attacks! Enter your result below.");

    if (check4 ==1) {
        alert("You raise your shield to defend yourself. The dragon blows a nasty blast of fire at you! Your shield... melts under the heat and you are consumed by flames. Your adventure ends here...");
    } else if (check4>1 && check4<10) {
        alert("You raise your shield to defend yourself. The dragon blows a nasty blast of fire at you! Your shield... holds up, but you drop it due to how hot it is. The dragon takes the opportunity to swallow you and the maiden whole. Your adventure ends here...");
    } else if (check4=>10 && check4<20) {
        alert("You dodge an incoming fireball and slam the shield into the dragon's head! It stuns the beast, giving you time to escape with the maiden!");
        escapeLair();
    } else if (check4 ==20) {
        alert("A natural 20! You dodge an incoming fireball and slam the shield into the dragon's head! You slay the dragon in one attack! The maiden runs down the golden mountain to embrace you.");
        escape20();
    } else {
        alert("You get confused and the dragon takes the opportunity to swallow you and the maiden whole. Your adventure ends here...");
    }
}

function escapeLair() {
    alert("While the dragon is stunned, you and the maiden escape to the surface! You return the maiden to her home and the village praises you for resucing her! They shower you with gifts, and the maiden bestows a kiss upon the cheek of her hero. Well done, brave warrior!");
}

function escape20() {
    let gold =prompt("You have done what was thought impossible in your land... You have slain a dragon! You notice the mountain of gold and riches under the body of the defeated beast. Do you KEEP it to become rich and powerful, or OFFER it to the people of your world?");

    if (gold.toUpperCase()=="OFFER") {
        alert("You offer the gold to the people of your world. They hail you as a hero and the king of the land recognizes your efforts! You are knighted, and the maiden you have saved wishes to become your life partner! A happy ending for all! (Except the dragon...)");
    } else if (gold.toUpperCase()=="KEEP") {
        alert("You keep the mountain of riches for yourself and your rescued maiden. You harvest the dragon's scales and sell them to increase your wealth. You buy yourself a castle in the countryside and live out the rest of your days, rich, happy, and prosperous.");
    }
}

function goHome() {
    walkOff();
}

function walkOff() {
    alert("Your cowardice gets the better of you... You walk away to live another day.");
}

function gameStart() {
    let hero = prompt("Welcome, brave hero, chosen by the gods! Tell us your name, and be regaled as a legend!");
    alert("Brave "+hero+"! Your quest begins today! Be warned that dangers are many on your path to glory. You will need strength, wisdom, and courage! Do you wish to go forth? If so, press okay!");
    tools =prompt("For this quest, you will need a 20-sided die. (A dice rolling app is useful as well.) Choose your quest item to begin: Staff, Sword, or Shield.");
    let path=prompt("You start your quest walking down a forest path. Suddenly, you hear a shriek! Someone is in trouble! You look around and find a cave. You are unsure if that is where the shriek came from, until you hear it again! Do you ENTER the cave or WALK AWAY?");

    if(path.toUpperCase()=="ENTER") {
        enterCave();
    } else {
        walkOff();
    }
}