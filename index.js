let headingElement = document.getElementById('headingElement')
headingElement.style.fontFamily = 'monospace';

// Delete the element
// headingElement.parentNode.removeChild(headingElement);
//  let bodyElement = document.getElementById('body');
// bodyElement.removeChild(headingElement) 

//Create a new element
let paragraphElement = document.createElement('p');
paragraphElement.innerText = 'A forest is an area of land dominated by trees.';
paragraphElement.style.color ='darkblue';

// create an image element
let imageElement = document.createElement('img');
imageElement.setAttribute('src','https://th.bing.com/th/id/OIP.1_KjJrAFffq-1CmZyC-52gHaEo?w=273&h=180&c=7&r=0&o=5&pid=1.7');

let bodyElement = document.getElementById('body');
bodyElement.appendChild(paragraphElement)
bodyElement.appendChild(imageElement);

//Adding events to elements
let button = document.getElementById('button');
button.addEventListener('click',function(){
    let colors = ['grey','lightpurple','lightgreen','white','skyblue']
    let textArray =['Glad to have you here','You are most welcome','Hoooray','The Lord is Good']
    headingElement.innerText= textArray[Math.floor(Math.random()*textArray.length)];
   bodyElement.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
})

