// Importing the Immutable.js library
const { Map } = require('immutable');

// Function to convert a plain object to an Immutable Map
function getImmutableObject(object) {
  return Map(object);
}

// Exporting the function
module.exports = getImmutableObject;


