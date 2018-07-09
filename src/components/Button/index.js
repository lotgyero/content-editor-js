import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component{
  render(){
    return(
      <div onClick={this.props.onClick}>
        {this.props.label}
      </div>);
  }
}

export default Button;
