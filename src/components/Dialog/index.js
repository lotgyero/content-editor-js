import React from 'react';

import Photo from './Photo';
import Video from './Video';

class Dialog extends React.Component{
  showState=()=>{
    console.log(this.props);
  };
  showDialog=()=>{
    switch(this.props.type){
      case 'Photo':{
        return (<Photo />);
      }
      case 'Video':{
        return (<Video />);
      }
      default:{
        return(<div />);
      }
    }
  };
  render(){
    return(
      <div className="show-dialog" onClick={this.showState}>
        {this.showDialog()}
      </div>);
  }
}

export default Dialog;
