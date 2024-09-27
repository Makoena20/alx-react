// Importing the Immutable.js library
import { Map } from 'immutable';

// Creating an Immutable Map with the specified object
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Creating a second Immutable Map based on the first map with modified values
export const map2 = map
  .set(2, 'Benjamin')  // Modifying the value for index 2
  .set(4, 'Oliver');   // Modifying the value for index 4


