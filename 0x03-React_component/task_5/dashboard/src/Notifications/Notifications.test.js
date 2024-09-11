import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

describe('Notifications component', () => {
  let consoleSpy;

  beforeEach(() => {
    // Mock console.log to ensure no errors/warnings are logged
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('does not re-render when the listNotifications length remains the same', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'Test notification 1' },
    ];

    const { rerender } = render(<Notifications listNotifications={initialNotifications} />);

    // Rerender with the same list
    rerender(<Notifications listNotifications={initialNotifications} />);

    // Verify that no unnecessary rerender occurs
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it('does re-render when the listNotifications length increases', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'Test notification 1' },
    ];

    const updatedNotifications = [
      { id: 1, type: 'default', value: 'Test notification 1' },
      { id: 2, type: 'urgent', value: 'Test notification 2' },
    ];

    const { rerender } = render(<Notifications listNotifications={initialNotifications} />);

    // Rerender with a longer list
    rerender(<Notifications listNotifications={updatedNotifications} />);

    // Verify that rerender happens when list length increases
    expect(consoleSpy).toHaveBeenCalled();
  });
});

