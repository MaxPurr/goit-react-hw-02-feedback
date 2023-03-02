import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../css/Statistics.module.css';

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
      <ul className={css.statistics_container}>
        <li className={css.statistics_item}>
          <p>Good:</p>
          <p>{good}</p>
        </li>
        <li className={css.statistics_item}>
          <p>Neutral:</p>
          <p>{neutral}</p>
        </li>
        <li className={css.statistics_item}>
          <p>Bad:</p>
          <p>{bad}</p>
        </li>
        <li className={css.statistics_item}>
          <p>Total:</p>
          <p>{total}</p>
        </li>
        <li className={css.statistics_item}>
          <p>Positive feedback:</p>
          <p>{positivePercentage}%</p>
        </li>
      </ul>
    );
  }
}
