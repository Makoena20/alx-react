// courses.js

import { schema } from 'normalizr';

// Define the course entity
const course = new schema.Entity('courses');

// Function to normalize courses data
export const coursesNormalizer = (data) => {
  return normalize(data, [course]);
};

