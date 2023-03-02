import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  render() {
    const { good } = this.props;
    const { neutral } = this.props;
    const { bad } = this.props;
    const { total } = this.props;
    const { positivePercentage } = this.props;
    return (
      <div>
        <ul>
          <li>
            <p>Good:</p>
            <p>{good}</p>
          </li>
          <li>
            <p>Neutral:</p>
            <p>{neutral}</p>
          </li>
          <li>
            <p>Bad:</p>
            <p>{bad}</p>
          </li>
          <li>
            <p>Total:</p>
            <p>{total}</p>
          </li>
          <li>
            <p>Positive feedback:</p>
            <p>{positivePercentage}%</p>
          </li>
        </ul>
      </div>
    );
  }
}
