import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext';
import './Footer.css';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="Footer">
      <p>Copyright 2023 - Holberton School</p>
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </div>
  );
};

export default Footer;

