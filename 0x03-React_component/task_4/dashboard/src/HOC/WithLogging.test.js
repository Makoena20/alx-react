import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WithLogging from './WithLogging';
import { act } from 'react-dom/test-utils';

describe('WithLogging HOC', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Mock the console.log function
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore the original console.log function after each test
    consoleLogSpy.mockRestore();
  });

  it('should log Component is mounted and Component is going to unmount when wrapping pure HTML', () => {
    const TestComponent = WithLogging(() => <p>Hello</p>);

    // Render the component and trigger componentDidMount
    const { unmount } = render(<TestComponent />);

    // Check if console.log was called with the correct message on mount
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is mounted');

    // Unmount the component and trigger componentWillUnmount
    unmount();

    // Check if console.log was called with the correct message on unmount
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('should log Component Login is mounted and Component Login is going to unmount when wrapping Login component', () => {
    // Mock Login component for testing
    const Login = () => <div>Login Component</div>;
    Login.displayName = 'Login';

    const TestComponent = WithLogging(Login);

    // Render the component and trigger componentDidMount
    const { unmount } = render(<TestComponent />);

    // Check if console.log was called with the correct message on mount
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted');

    // Unmount the component and trigger componentWillUnmount
    unmount();

    // Check if console.log was called with the correct message on unmount
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});

