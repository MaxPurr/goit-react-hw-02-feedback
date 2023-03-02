import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../css/Notification.module.css';

export class Notification extends Component {
  static defaultProps = {
    message: 'There is no feedback',
  };

  static propTypes = {
    message: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
    };
  }

  render() {
    return (
      <div className={css.notification_container}>
        <p className={css.notification_text}>{this.state.message}</p>
      </div>
    );
  }
}
