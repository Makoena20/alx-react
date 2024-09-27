// Importing the Immutable.js library
import { List, Map } from 'immutable';

// Function to concatenate two arrays into an Immutable List
export function concatElements(page1, page2) {
  return List([...page1, ...page2]);
}

// Function to merge two objects into an Immutable List
export function mergeElements(page1, page2) {
  const mergedMap = Map(page1).merge(Map(page2));
  return mergedMap.valueSeq().toList(); // Get the values and convert to List
}


