import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications(); // Fetch notifications when the component mounts
  }

  render() {
    const { listNotifications, loading } = this.props;

    return (
      <div className="Notifications">
        {loading ? <p>Loading...</p> : null}
        <ul>
          {listNotifications.map((notification) => (
            <li key={notification.id}>{notification.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listNotifications: state.notifications.get('notifications').valueSeq().toArray(),
    loading: state.notifications.get('loading')
  };
};

const mapDispatchToProps = {
  fetchNotifications
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

