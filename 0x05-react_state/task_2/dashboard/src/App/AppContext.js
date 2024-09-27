import React from 'react';

const user = {
  email: '',
  password: '',
  isLoggedIn: false,
};

function logOut() {
  // Default logOut function (does nothing)
}

const AppContext = React.createContext({
  user,
  logOut,
});

export { AppContext, user, logOut };

