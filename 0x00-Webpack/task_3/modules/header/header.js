// task_3/modules/header/header.js
import $ from 'jquery';
import './header.css';
import logo from '../assets/logo.png';

$(document).ready(function() {
  $('header').append(`<img src="${logo}" alt="Holberton Logo"/>`);
  $('header').append('<h1>Holberton Dashboard</h1>');
  console.log('Init header');
});

