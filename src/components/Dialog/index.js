import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';
import Video from './Video';

const DialogActionContext = React.createContext();

class Dialog extends React.Component{

  _showDialog=(e)=>{
    switch(this.props.type){
    case 'Photo':{
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
    return(
        <DialogActionContext.Provider value={this.props.actions}>
        <form className={this.props.open ? "selector-dialog":"selector-dialog-hide"}>
        {this._showDialog()}
      </form>
        </DialogActionContext.Provider>
       );
  }
}

Dialog.propTypes ={
  actions: PropTypes.shape({
    dialogHide: PropTypes.func.isRequired,
    blockCreate: PropTypes.func.isRequired
  }),
  open: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["Photo", "Video"])
};

export default Dialog;
// export { Consumer };
export { DialogActionContext };
