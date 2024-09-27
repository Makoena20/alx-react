import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('submit button is disabled by default', () => {
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('submit button is enabled after changing email and password inputs', () => {
    const emailInput = wrapper.find('input#email');
    const passwordInput = wrapper.find('input#password');

    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password123' } });

    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });

  it('submit button is disabled when one input is empty', () => {
    const emailInput = wrapper.find('input#email');
    const passwordInput = wrapper.find('input#password');

    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { value: '' } });

    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('calls handleLoginSubmit when form is submitted', () => {
    const handleLoginSubmit = jest.spyOn(Login.prototype, 'handleLoginSubmit');
    const wrapperWithSpy = shallow(<Login />);
    wrapperWithSpy.find('form').simulate('submit', { preventDefault: () => {} });
    expect(handleLoginSubmit).toHaveBeenCalled();
  });
});


