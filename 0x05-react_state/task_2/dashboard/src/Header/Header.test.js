import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { AppContext, user } from '../App/AppContext';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('does not display logout section when user is logged out', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { ...user, isLoggedIn: false } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('displays logout section when user is logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { ...user, isLoggedIn: true, email: 'test@test.com' } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@test.com');
  });

  it('calls logOut when clicking the logout link', () => {
    const logOutMock = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: { ...user, isLoggedIn: true, email: 'test@test.com' }, logOut: logOutMock }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('a').simulate('click');
    expect(logOutMock).toHaveBeenCalled();
  });
});

