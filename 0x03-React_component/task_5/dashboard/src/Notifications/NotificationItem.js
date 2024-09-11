import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, value, html }) => {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html ? { __html: html } : undefined}>
      {!html && value}
    </li>
  );
};

// Use React.memo to make the component "pure"
export default React.memo(NotificationItem, (prevProps, nextProps) => {
  return prevProps.type === nextProps.type && prevProps.value === nextProps.value && prevProps.html === nextProps.html;
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

