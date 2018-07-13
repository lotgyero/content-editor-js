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
        <Button label="добавить фото" onClick={this.showPhoto} />
        <Button label="добавить видео" onClick={this.showVideo} />
      </form>);
  }
}


export default Panel;
