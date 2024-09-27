// Importing the Immutable.js library
import { List } from 'immutable';

// Function to convert an array into an Immutable List
export function getListObject(array) {
  return List(array);
}

// Function to add an element to an Immutable List
export function addElementToList(list, element) {
  return list.push(element);
}


