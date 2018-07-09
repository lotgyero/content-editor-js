import React from 'react';
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
      <form>
        <Button label="Фото" onClick={this.showPhoto} />
        <Button label="Видео" onClick={this.showVideo} />
      </form>);
  }
}


export default Panel;
