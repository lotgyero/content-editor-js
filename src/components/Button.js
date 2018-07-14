import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  _handleSubmit = e => {
    e.preventDefault();
    this.props.onClick();
  };
  render() {
    return <button onClick={this._handleSubmit}>{this.props.label}</button>;
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired
};

export default Button;
