import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';
import '@testing-library/jest-dom/extend-expect';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    render(<NotificationItem type="default" value="test" />);
  });

  it('renders the correct type and value', () => {
    const { getByText } = render(<NotificationItem type="default" value="test" />);
    const li = getByText('test');
    expect(li).toHaveAttribute('data-notification-type', 'default');
  });

  it('renders with dangerouslySetInnerHTML when html prop is passed', () => {
    const { container } = render(
      <NotificationItem type="default" html={{ __html: '<u>test</u>' }} />
    );
    const li = container.querySelector('li');
    expect(li).toHaveAttribute('data-notification-type', 'default');
    expect(li.innerHTML).toBe('<u>test</u>');
  });
});

