// Importing the Immutable.js library
const { fromJS } = require('immutable');

// Function to convert an object to an Immutable Map
function getImmutableObject(object) {
  return fromJS(object);
}

// Exporting the function
module.exports = getImmutableObject;

