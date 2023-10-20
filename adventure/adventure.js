let tool;



function enterRoom() {
    alert("You enter the room and it is really dark and the growl is getting louder...");

    if(tool.toUpperCase()=="SHOVEL"){
        alert("Luckily you chose the shovel. You were able to defeat the beast by knocking him out with your "+tool);   
    } else if (tool.toUpperCase()=="LADDER") {
        alert("You tried to climb you "+tool+" but the beast dragged you down and devoured you...");
    } else if (tool.toUpperCase()=="FLASHLIGHT") {
        alert("You were able to blind the beast with your "+tool+" and escape!");
        let alertAC =prompt("Do you tell authorities about the beast? ALERT or HOME");

        if(alertAC.toUpperCase()=="ALERT") {
            alertAControl();
        } else {
            goHome();
        }
    }
}

function leaveRoom() {
    alert("You chose to leave, Chicken!");
}


function startGame() {
    let player =prompt("Welcome to my Choose-your-own Adventure Game. Please start by entering your name.");
    alert("Welcome, "+player+"! Today we are going on a campus adventure. Are you ready? Click okay to begin!");
    tool =prompt("To begin your adventure, you need to select a tool. Please pick your tool of choice: ladder, flashlight, or shovel.");
    let room=prompt("You are walking through the campus center and you hear a menacing growl coming from around the corner. Do you ENTER or LEAVE?");

    if(room.toUpperCase()=="ENTER") {
        enterRoom();
    } else {
        leaveRoom();
    }
}