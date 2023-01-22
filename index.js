// Remove the <main> element
var main = document.getElementById('main');
main.parentNode.removeChild(main);

// Create a new <h1> element
var newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Parker is the champion';

// Insert the new <h1> element into the <body>
document.body.appendChild(newHeader);
