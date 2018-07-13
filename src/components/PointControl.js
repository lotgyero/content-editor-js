/*
     N
  NW   NE
W          E
  SW   SE
     S
*/
import React from 'react';
import { EditingSpaceContext } from './EditingSpace';

const styleNW ={
  left: 0,
  top: 0
};

const styleNE ={
  right: 0,
  top: 0
};

const styleSW = {
  left: 0,
  bottom: 0
};

const styleSE ={
  right: 0,
  bottom: 0
};

const styleCenter ={
  right: '49%',
  left: '49%',
  top: '49%',
  bottom: '49%'
};

class Point extends React.Component{
  _getStyle=()=>{
    switch(this.props.orientation){
    case"NW":
      return styleNW;
    case"NE":
      return styleNE;
    case"SW":
      return styleSW;
    case"SE":
      return styleSE;
    default:
      return styleCenter;
    }
  }

  _handleOnDragStart=(e)=>{
    // const {clientX, clientY } = e;
  }
  _handleOnDragEnd=(e)=>{
    const {clientX, clientY } = e;
    let newSizeX;
    let newSizeY;
    let proportional = false;

    switch(this.props.block.type){
    case "Photo":
      proportional = true;
      break;
    case "Video":
      proportional = false;
      break;
    default:
      proportional = false;
    };

    const { x, y, sizeX, sizeY} = this.props.block.geometry;

    switch(this.props.orientation){
    case"NW":

        newSizeX =  sizeX - clientX + x;
        newSizeY = sizeY - clientY + y ;
      break;
    case"NE":
        newSizeX = clientX - x;
        newSizeY = y - clientY + sizeY ;
      break;
    case"SW":
        newSizeX = x - clientX + sizeX ;
        newSizeY = clientY - y;
      break;
    case"SE":
      newSizeX = clientX - x;
      newSizeY = clientY - y;
      break;
    default:
      break;
    }

    if(proportional){
      let reSizeX =   newSizeX / sizeX;
      let reSizeY =  newSizeY /sizeY ;
      console.log({reSizeX, reSizeY});
      let mashResize = reSizeX > reSizeY ? reSizeX : reSizeY;
      newSizeX = Math.floor(sizeX * mashResize);
      newSizeY = Math.floor(sizeY * mashResize);
    }

    this.props.actions.blockResize(
      this.props.id,
      newSizeX,
      newSizeY,
      this.props.orientation);
  }
  render(){
    return(
        <div
      style={this._getStyle()}
      draggable="true"
      className="control-point"
      onDragStart={this._handleOnDragStart}
      onDragEnd={this._handleOnDragEnd}
        >
        </div>
    );
  }
}

// actions={this.props.actions}

const PointWrapper = (props) =>{
  return(
      <EditingSpaceContext.Consumer>
      {context => <Point {...props} actions={context.actions}/>}
      </EditingSpaceContext.Consumer>
  )
};



class PointControl extends React.Component{
  render(){
    return(
        <div>

        <PointWrapper
      orientation="NW"
      id={this.props.id}
      block={this.props.block}/>

        <PointWrapper
      orientation="NE"
      id={this.props.id}
      block={this.props.block}/>

        <PointWrapper
      orientation="SW"
      id={this.props.id}
      block={this.props.block}/>

        <PointWrapper
      orientation="SE"
      id={this.props.id}
      block={this.props.block}/>

        </div>);
  }
};

export default PointControl;
