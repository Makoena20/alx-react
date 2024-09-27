// Importing the Immutable.js library
import { fromJS } from 'immutable';

// Function to convert an object to an Immutable Map
function getImmutableObject(object) {
  return fromJS(object);
}

// Exporting the function
export { getImmutableObject };

