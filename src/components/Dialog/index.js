import React from 'react';
import PropTypes from 'prop-types';

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
      <div onClick={this.showState}>
        {this.showDialog()}
      </div>);
  }
}

const mapStateToProps = (state) => {
  return{
    open: state.Dialog.open
  };
};


Dialog.propTypes = {

};

export default Dialog;
