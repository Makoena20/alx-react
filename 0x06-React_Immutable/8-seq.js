// Importing the Immutable.js library
import { Map } from 'immutable';

// Function to print students with a score >= 70
export function printBestStudents(grades) {
  // Create an Immutable Map from the grades object
  const gradesMap = Map(grades);
  
  // Use seq to filter and print students with a score >= 70
  gradesMap
    .filter(student => student.get('score') >= 70) // Filter students by score
    .forEach(student => {
      const firstName = student.get('firstName');
      const lastName = student.get('lastName');
      // Print the student's name with capitalization
      console.log(`${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`);
    });
}


