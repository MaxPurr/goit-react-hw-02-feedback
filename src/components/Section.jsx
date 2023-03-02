import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../css/Section.module.css';

export class Section extends Component {
  static defaultProps = {
    title: '',
  };

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
    };
  }

  render() {
    const { children } = this.props;
    return (
      <section className={css.section}>
        <h3 className={css.title}>{this.state.title}</h3>
        {children}
      </section>
    );
  }
}
