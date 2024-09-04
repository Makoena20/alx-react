// task_2/dashboard/src/App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>&copy; 2024 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;

