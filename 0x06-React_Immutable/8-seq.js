// Importing the necessary functions from Immutable.js
const { Seq } = require('immutable');

// Function to print best students based on their scores
function printBestStudents(grades) {
  // Create a sequence from the grades object
  const seq = Seq(grades);

  // Filter students with scores >= 70 and map to desired format
  const bestStudents = seq.filter(student => student.score >= 70)
                           .map(student => ({
                             score: student.score,
                             firstName: capitalizeFirstLetter(student.firstName),
                             lastName: capitalizeFirstLetter(student.lastName)
                           }));

  // Print the result to the console
  console.log(bestStudents.toJS()); // Convert Immutable Seq back to regular JS object
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Example usage
const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 65,
    firstName: 'john',
    lastName: 'doe',
  },
  3: {
    score: 72,
    firstName: 'jane',
    lastName: 'smith',
  },
};

printBestStudents(grades);


