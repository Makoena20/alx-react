import { mapStateToProps } from './App'; // Import the mapStateToProps function
import { fromJS } from 'immutable'; // Assuming you're using Immutable.js

describe('mapStateToProps', () => {
  it('should return the correct object when state is passed', () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });
    const expectedProps = { isLoggedIn: true };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

