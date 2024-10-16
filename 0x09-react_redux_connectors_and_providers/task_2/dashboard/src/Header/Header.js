import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/uiActionCreators';

const Header = ({ user, logout }) => (
  <header>
    <h1>Dashboard Header</h1>
    {user ? (
      <div>
        <span>{user.name}</span>
        <button onClick={logout}>Log Out</button>
      </div>
    ) : (
      <p>Please log in</p>
    )}
  </header>
);

// mapStateToProps to map user from state
const mapStateToProps = (state) => ({
  user: state.get('user'),
});

// Connect the logout action
const mapDispatchToProps = {
  logout,
};

// Define propTypes
Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

// Define defaultProps
Header.defaultProps = {
  user: null,
  logout: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

