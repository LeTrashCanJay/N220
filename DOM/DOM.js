//DOM: Document Object Model

//ID: Targets individual element (or node)
document.getElementById('title').innerText = "Fall Break";

//QuerySelector: targets individual element using CSS selectors
document.querySelector('p').innerText = "Query Selector";

//Selecting multiple elements
//Class name
document.getElementsByClassName('odd')[1].style.color="red";

//Tag Name
document.getElementsByTagName('li')[3].style.backgroundColor="purple";

//QuerySelectorAll
var notOdd = document.querySelectorAll('li:not(.odd)');
notOdd[0].style.fontWeight="bold";

//--------------------------//
//Problem: Target all list items, removing bullet point, and adding padding

let allItems = document.getElementsByTagName('li');

for (let i=0; i<allItems.length; i++) {
    allItems[i].style.padding="10px";
    allItems[i].style.listStyleType="none";
}

//Problem: target alternative bands and give them a green background, white text, and italic text.

let altBands = document.getElementsByClassName('alternative');

for (let a=0; a<altBands.length; a++) {
    altBands[a].style.backgroundColor="green";
    altBands[a].style.color="white";
    altBands[a].style.fontStyle="italic";
}

//Problem: Make Candlebox text a link to their website.
/*1. Target correct element
2. Create a variable with the element's value in it
3. Wrap a link around text
4. Put all of that back in the element
*/
let candleboxE = document.getElementsByClassName('rock')[1];
let candleboxText = candleboxE.innerText;
candleboxText='<a href ="https://www.candleboxrocks.com/">'+candleboxText+'</a>';
candleboxE.innerHTML=candleboxText;

//Problem: Add item to list
function addItem() {
    let newItem=prompt("Add Item: ");
    let newLiItem = document.createElement('li');
    let newLiText=document.createTextNode(newItem);
    newLiItem.appendChild(newLiText);//<li>bananas</li>

    //target list
    let allLists = document.getElementsByTagName('ul');
    let list = allLists[allLists.length-1];

    newLiItem.style.padding="10px";
    newLiItem.style.listStyleType="none";

    list.appendChild(newLiItem);
}

//Problem: Delete items
function deleteItem() {
    let allLists = document.getElementsByTagName('ul');
    let list = allLists[allLists.length-1];
    let lastItem =list.lastElementChild;
    list.removeChild(lastItem);
}
