document.getElementById('title').innerText = "DOM Manipulation";
document.querySelector('div').style.backgroundColor="lightblue";

let addTo = document.getElementsByTagName('ul');
let theList = addTo[addTo.length-1];



let newItem = document.createElement('li');
let newName = document.createElement('li');
let newText = document.createTextNode("Item 7");
let nameText = document.createTextNode("Jay");

newItem.appendChild(newText);
newName.appendChild(nameText);
theList.appendChild(newItem);
theList.appendChild(newName);

let listItems = document.getElementsByTagName('li');

listItems[0].style.color="crimson";
listItems[2].style.backgroundColor="pink";
listItems[4].style.backgroundColor="yellow";
listItems[6].style.backgroundColor="lightGray";
listItems[6].style.color="royalBlue";
listItems[3].remove();



let button = document.getElementById('btn');
button.style.color="white";
button.style.backgroundColor="rebeccapurple";
button.style.borderColor="white";