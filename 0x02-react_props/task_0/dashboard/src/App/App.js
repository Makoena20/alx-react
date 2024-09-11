import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <>
      <Header />
      <div className="App-body">
        <Login />
      </div>
      <Footer />
    </>
  );
}

export default App;

