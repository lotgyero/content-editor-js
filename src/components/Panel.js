import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Panel extends React.Component{
  showVideo=()=>{
    this.props.showDialog('Video');
  }
  showPhoto=()=>{
    this.props.showDialog('Photo');
  }
  render(){
    return(
      <div>
        <Button label="Фото" onClick={this.showPhoto} />
        <Button label="Видео" onClick={this.showVideo} />
      </div>);
  }
}


export default Panel;
