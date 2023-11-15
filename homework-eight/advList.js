function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

var viewInfo = document.querySelector('main');
viewInfo.addEventListener('click', displayInfo, false);

function displayInfo(e) {
    var target = getTarget(e);
    if (target.tagName == "H2") {
        var tParent = target.parentNode;
        var parentDiv = tParent.children;
        console.log(parentDiv[1]);
        if (parentDiv[1].style.display == "none") {
            parentDiv[1].style.display = "block";
        } else {
            parentDiv[1].style.display = "none";
        }
    }
}

var myList = document.querySelector("#codeBox ul");
var addBtn = document.getElementsByTagName('input')[0];

addBtn.addEventListener('click', addItem, false);

function addItem() {
    var newItem = prompt("New Item:");
    var newLI = document.createElement('li');
    var newLIText = document.createTextNode(newItem);
    newLI.appendChild(newLIText);
    myList.appendChild(newLI);

    for (let i = 0; i<myItems.length; i++) {
        let newImg = document.createElement("IMG");
        newImg.setAttribute("src","https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png");
        newImg.classList.add("listIcon");
        newLI.appendChild(newImg);
    }
}


let myItems = document.querySelectorAll('#codeBox li');
console.log(myItems);
let totalItems = myItems.length;
console.log(totalItems);


for (let i = 0; i<myItems.length; i++) {
    let newImg = document.createElement("IMG");
    newImg.setAttribute("src","https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png");
    newImg.classList.add("listIcon");
    myItems[i].append(newImg);
}


myList.addEventListener('click',changeProp,false);


function changeProp(e) {
    let target = getTarget(e);
    let tParent = target.parentNode;

    if (tParent.tagName == "LI") {
        tParent.parentNode.removeChild(tParent);
    } else if (tParent.tagName == "UL") {
        if(target.className=="selected") {
            target.classList.remove("selected");
            console.log(target);
        } else {
            target.classList.add("selected");
            console.log(target);
        }
    }

    

}

