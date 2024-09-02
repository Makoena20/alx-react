// task_2/js/dashboard_main.js

import '../css/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.createElement('div');
  logo.id = 'logo';
  document.body.insertBefore(logo, document.body.firstChild);
  
  const button = document.createElement('button');
  button.innerHTML = 'Click me';
  const counter = document.createElement('span');
  counter.className = 'counter';
  counter.innerHTML = '0';
  button.appendChild(counter);

  document.body.appendChild(button);

  button.addEventListener('click', () => {
    counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
  });
});

