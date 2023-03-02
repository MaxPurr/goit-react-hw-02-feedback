import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../css/FeedbackOptions.module.css';
import clsx from 'clsx';

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
      <div className={css.btn_container}>
        {options.map(option => (
          <button
            className={clsx(css.feedback_btn, css[option.toLowerCase()])}
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
