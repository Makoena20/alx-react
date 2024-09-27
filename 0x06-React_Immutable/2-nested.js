// Importing the Immutable.js library
import { fromJS } from 'immutable';

// Function to access a value at a defined path
export default function accessImmutableObject(object, array) {
  const immutableObject = fromJS(object);
  return immutableObject.getIn(array);
}


