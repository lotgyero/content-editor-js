import React from 'react';

import Photo from './Photo';
import Video from './Video';

class Dialog extends React.Component{

  _showDialog=(e)=>{
    switch(this.props.type){
      case 'Photo':{
        return (<Photo blockCreate={this.props.blockCreate} hideDialog={this.props.hideDialog} />);
      }
      case 'Video':{
        return (<Video blockCreate={this.props.blockCreate} hideDialog={this.props.hideDialog} />);
      }
      default:{
        return(<div />);
      }
    }
  };
  render(){

    return(
      <form className={this.props.open ? "selector-dialog":"selector-dialog-hide"}>
        {this._showDialog()}
      </form>);
  }
}

export default Dialog;
