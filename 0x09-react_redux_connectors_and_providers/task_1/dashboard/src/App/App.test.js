import { mapStateToProps } from './App'; // Import the mapStateToProps function
import { fromJS } from 'immutable'; // Assuming you're using Immutable.js
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

describe('mapStateToProps', () => {
  it('should return the correct object when state is passed', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false,
    });
    const expectedProps = { 
      isLoggedIn: true,
      displayDrawer: false,
    };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

describe('mapDispatchToProps', () => {
  it('should return the correct actions for displayNotificationDrawer and hideNotificationDrawer', () => {
    const dispatch = jest.fn();
    
    const props = mapDispatchToProps(dispatch);
    props.displayNotificationDrawer();
    props.hideNotificationDrawer();

    expect(dispatch).toHaveBeenCalledWith(displayNotificationDrawer());
    expect(dispatch).toHaveBeenCalledWith(hideNotificationDrawer());
  });
});

