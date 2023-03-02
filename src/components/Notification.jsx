import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <>
        <p>{this.state.message}</p>
      </>
    );
  }
}
