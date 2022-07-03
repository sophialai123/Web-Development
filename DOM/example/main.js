const addMoreButton = document.getElementById('addMore');


addMoreButton.addEventListener("click", function renderInputButtons() {

  const container = document.createElement('section');
  container.setAttribute('id', "Inputs");

  let header = document.createElement('h3');
  header.innerText = "Select a";
  container.appendChild(header);

  // Create the radio input element.
  let divElement = document.createElement('div');
  divElement.setAttribute('class', 'option');

  let inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'radio');
  inputElement.setAttribute('name', 'radio');
  divElement.appendChild(inputElement);

  // Create a label for that radio input element.
  let labelElement = document.createElement('label');
  labelElement.setAttribute('for', "label");
  labelElement.innerText = "";
  divElement.appendChild(labelElement);


  container.appendChild(divElement);
  ;

  //The prepend() method inserts specified content 
  //at the beginning of the selected elements.
  document.querySelector('main').prepend(container);
}
)




//create mutiple inputs at once
function generate() {
  for (let i = 0; i < 5; i++) {
    let input = document.createElement('input');
    input.setAttribute('id', "input" + i);
    let breakLine = document.createElement("br");
    document.getElementById("multipleInput").appendChild(input);
    document.getElementById("multipleInput").appendChild(breakLine);
  }
}

