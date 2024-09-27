// Import the required function from Immutable.js
import { is } from 'immutable';

/**
 * Checks if two Immutable.js Maps are equal.
 * 
 * @param {Map} map1 - The first Immutable.js Map.
 * @param {Map} map2 - The second Immutable.js Map.
 * @returns {boolean} - Returns true if the Maps are equal, false otherwise.
 */
const areMapsEqual = (map1, map2) => {
  return is(map1, map2);
};

// Example usage:
const map1 = new Map({
  firstName: 'Guillaume',
  lastName: 'Salva',
});
const map2 = new Map({
  firstName: 'Guillaume',
  lastName: 'Salva',
});

console.log(areMapsEqual(map1, map2)); // Should return true

