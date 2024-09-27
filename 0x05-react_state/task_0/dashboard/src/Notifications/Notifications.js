import React from 'react';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.displayDrawer !== this.props.displayDrawer;
  }

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div className="Notifications">
        <div className="menuItem" onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer ? (
          <div className="Notifications">
            <button
              style={{
                float: 'right',
                background: 'transparent',
                border: 'none',
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              Close
            </button>
            <p>Here is the list of notifications</p>
          </div>
        ) : null}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;

