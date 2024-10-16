import { FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from './actionTypes';

// Action creator for setting loading state
export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading
});

// Action creator for setting notifications
export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data: notifications
});

// Async action creator for fetching notifications
export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true)); // Set loading to true

    // Fetch notifications from the API
    fetch('/notifications.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setNotifications(data)); // Set notifications with fetched data
        dispatch(setLoadingState(false)); // Set loading to false after fetch
      })
      .catch((error) => {
        dispatch(setLoadingState(false)); // Set loading to false in case of error
        console.error('Failed to fetch notifications:', error);
      });
  };
};

