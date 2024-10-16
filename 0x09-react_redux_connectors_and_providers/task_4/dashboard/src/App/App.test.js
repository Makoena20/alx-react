import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('App Component', () => {
  it('should correctly map state to props', () => {
    const state = {
      ui: fromJS({
        isUserLoggedIn: true,
      }),
      courses: fromJS({}),
      notifications: fromJS({})
    };

    const expectedProps = {
      isLoggedIn: true,
      courses: fromJS({}),
      notifications: fromJS({})
    };

    const props = mapStateToProps(state);
    expect(props).toEqual(expectedProps);
  });
});

