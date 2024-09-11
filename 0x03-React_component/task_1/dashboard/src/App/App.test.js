import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  let logOutMock;
  let alertMock;

  beforeEach(() => {
    logOutMock = jest.fn();
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls logOut and displays alert when Control and h keys are pressed', () => {
    const wrapper = shallow(<App logOut={logOutMock} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });

  it('removes the event listener on unmount', () => {
    const wrapper = shallow(<App logOut={logOutMock} />);
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
    wrapper.unmount();
    
    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
  });
});

