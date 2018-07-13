import React from 'react';

class Button extends React.Component{
  _handleSubmit=(e)=>{
    e.preventDefault();
    this.props.onClick();
  }
  render(){
    return(
      <button onClick={this._handleSubmit}>
      {this.props.label}
      </button>);
  }
}

export default Button;
