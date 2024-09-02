// task_3/modules/body/body.js
import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

$(document).ready(function() {
  const updateCounter = () => {
    $('p').text(`Counter: ${count}`);
  };

  $('body').append('<button>Click me</button>');
  $('body').append('<p>Counter: 0</p>');

  $('button').on('click', _.debounce(() => {
    count++;
    updateCounter();
  }, 300));
});

