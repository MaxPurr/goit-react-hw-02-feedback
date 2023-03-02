import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <section>
        <h3>{this.state.title}</h3>
        {children}
      </section>
    );
  }
}
