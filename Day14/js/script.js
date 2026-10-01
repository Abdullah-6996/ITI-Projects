let parentDiv = document.querySelector(`.parent`);
let newElement = document.createElement(`div`);

parentDiv.appendChild(newElement);
newElement.setAttribute(`class`, `childDiv`)
let text = document.createTextNode(`Hello from JS`);
newElement.appendChild(text);
console.log(parentDiv);
