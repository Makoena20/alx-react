// task_5/dashboard/src/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './index'; // Ensure your component is properly imported

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains an h1 element', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toEqual('Hello, React!');
  });
});

