// task_1/dashboard/src/App.js

import React from 'react';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      {/* Your other components */}
      <footer>
        <p>&copy; {getFullYear()} - {getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;

