// Assuming these are the action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

// Action creator for login (Async function using redux-thunk)
export const loginRequest = (email, password) => {
  return (dispatch) => {
    return fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Dispatch a success action when login succeeds
        dispatch({ type: LOGIN_SUCCESS, user: data });
      })
      .catch((error) => {
        console.error('Login failed', error);
      });
  };
};

// Action creator for logout
export const logout = () => {
  return { type: LOGOUT };
};

