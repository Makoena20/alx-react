// Importing the Immutable.js library
import { Map } from 'immutable';

// Helper function to recursively merge two maps
function mergeDeeply(map1, map2) {
  return map1.mergeDeep(map2);
}

// Function to merge two objects deeply
export function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const mergedMap = mergeDeeply(map1, map2);
  return mergedMap.valueSeq().toList(); // Convert values to an Immutable List
}


