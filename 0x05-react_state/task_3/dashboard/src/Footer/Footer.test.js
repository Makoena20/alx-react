import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('does not display the Contact us link when the user is logged out', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(0);
  });

  it('displays the Contact us link when the user is logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@test.com' } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').text()).toBe('Contact us');
  });
});

