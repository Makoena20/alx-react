import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('default user state is logged out', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('user').isLoggedIn).toBe(false);
  });

  it('logIn function updates user state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password123');
    expect(wrapper.state('user').isLoggedIn).toBe(true);
    expect(wrapper.state('user').email).toBe('test@example.com');
  });

  it('logOut function resets user state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        email: 'test@example.com',
        password: 'password123',
        isLoggedIn: true,
      },
    });
    wrapper.instance().logOut();
    expect(wrapper.state('user').isLoggedIn).toBe(false);
    expect(wrapper.state('user').email).toBe('');
  });

  it('markNotificationAsRead removes the notification from the listNotifications state', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      listNotifications: [
        { id: 1, value: 'New course available', type: 'default' },
        { id: 2, value: 'New resume available', type: 'urgent' },
      ],
    });
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state('listNotifications')).toEqual([
      { id: 2, value: 'New resume available', type: 'urgent' },
    ]);
  });
});

