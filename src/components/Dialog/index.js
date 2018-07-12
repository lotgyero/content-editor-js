import React from 'react';
import { createContext}  from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';
import Video from './Video';

const DialogActionContext = React.createContext ();

class Dialog extends React.Component{

  _showDialog=(e)=>{
    switch(this.props.type){
    case 'Photo':{
      console.log(this.context);
        return (<Photo  />);
      }
      case 'Video':{
        return (<Video  />);
      }
      default:{
        return(<div />);
      }
    }
  };
  render(){
    const actions ={
      blockCreate : this.props.blockCreate,
      hideDialog: this.props.hideDialog
    };
    return(
        <DialogActionContext.Provider value={actions}>
        <form className={this.props.open ? "selector-dialog":"selector-dialog-hide"}>
        {this._showDialog()}
      </form>
        </DialogActionContext.Provider>
       );
  }
}

export default Dialog;
// export { Consumer };
export { DialogActionContext };
