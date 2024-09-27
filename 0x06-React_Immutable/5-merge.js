import { List, Map } from 'immutable';

// Function to concatenate two arrays
export const concatElements = (page1, page2) => {
  // Convert both arrays to Immutable List and concatenate them
  const list1 = List(page1);
  const list2 = List(page2);
  return list1.concat(list2);
};

// Function to merge two objects
export const mergeElements = (page1, page2) => {
  // Convert both objects to Immutable Map
  const map1 = Map(page1);
  const map2 = Map(page2);
  
  // Merge maps, giving precedence to values from map2
  return map1.mergeWith((v1, v2) => v2, map2);
};

