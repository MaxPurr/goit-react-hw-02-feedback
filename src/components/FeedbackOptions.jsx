import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      onLeaveFeedback: this.props.onLeaveFeedback,
    };
  }

  render() {
    const { options } = this.props;

    return (
      <div>
        {options.map(option => (
          <button
            name={option.toLowerCase()}
            type="button"
            onClick={this.state.onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}
