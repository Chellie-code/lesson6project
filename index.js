let textArray = ['Glad to have you here']

let colorArray = ['green']

let paragraphElement = document.createElement('p');
paragraphElement.innerText = 'DOM in full is Document Object Model.';

let bodyElement = document.getElementById('body');
bodyElement.appendChild(paragraphElement)