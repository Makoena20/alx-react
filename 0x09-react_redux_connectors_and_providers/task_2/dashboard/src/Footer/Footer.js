import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Footer = ({ user }) => (
  <footer>
    {user ? <p>Logged in as {user.name}</p> : <p>Not logged in</p>}
  </footer>
);

// mapStateToProps to map the user from the state
const mapStateToProps = (state) => ({
  user: state.get('user'),
});

// Define propTypes
Footer.propTypes = {
  user: PropTypes.object,
};

// Define defaultProps
Footer.defaultProps = {
  user: null,
};

export default connect(mapStateToProps)(Footer);

