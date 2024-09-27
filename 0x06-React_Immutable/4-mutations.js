// Importing Immutable.js
import { Map } from 'immutable';

// Create the initial Immutable Map
export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

// Create a second Immutable Map based on the first one, modifying specified values
export const map2 = map
    .set(2, 'Benjamin') // Modify index 2 to 'Benjamin'
    .set(4, 'Oliver');  // Modify index 4 to 'Oliver' (unchanged)

