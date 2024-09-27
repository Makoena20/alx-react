// Import the Map from Immutable.js
import { Map } from 'immutable';

// Function to convert a plain object to an Immutable Map
export function getImmutableObject(obj) {
    return Map(obj);
}

// Example usage
const exampleObj = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

// Get the Immutable Map
const immutableMap = getImmutableObject(exampleObj);
console.log(immutableMap);

