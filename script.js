'use strict';

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 12; // for inputs use 'value'
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);