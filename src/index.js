import 'normalize.css';
import './style.css';

function component() {
  let element = document.createElement('div');

  element.innerHTML = "Hello World leader!!!";
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());