// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function () {
  itemOne.style.width = ''
  itemTwo.style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// create a function changes 
//the .width of itemOne to any size greater than '400px'.
function increaseWidth() {
  itemOne.style.width = "500px";

}

//create an event handler for itemOne that will trigger the 
//increaseWidth() function when the mouse hovers on it.
itemOne.addEventListener("mouseover", increaseWidth);


//changes the .backgroundColor of itemTwo
function changeBackground() {
  itemTwo.style.backgroundColor = 'green'
}

//You can use either .addEventListener() method 
//or .onevent property to register your event handler for the event type mouseout.
itemTwo.addEventListener("mouseup", changeBackground);


function changeText() {
  itemThree.innerHTML = "The mouse has left the element"
}

//.onevent property to register your event handler for the event type mouseout.
itemThree.onmouseout = changeText;

function showItem() {
  itemFive.style.display = "block"

}

// create an event handler for itemFour that triggers 
//the showItem() function when the mouse is pressed down on the element.
itemFour.onmousedown = showItem;


