/*
     N
  NW   NE
W          E
  SW   SE
     S
*/

import React from 'react';
import { EditingSpaceContext } from './EditingSpace';
const isProportional =(type)=>{
    switch(type){
    case "Photo":
      return true;
    case "Video":
      return  false;
    default:
      return false;
    }
};


const xCoordianate = ( geometry, pointType, size) => {

  switch(pointType){
  case "NW":
    return geometry.x + geometry.sizeX - size  ;
  case "NE":
    return geometry.x;
  case "SW":
    return geometry.sizeX - size + geometry.x;
  case "SE":
    return geometry.x;
  default:
    return geometry.x;
  }
};

const yCoordianate = (geometry, pointType, size) => {

  switch(pointType){
  case "NW":
    return geometry.sizeY - size + geometry.y;
  case "NE":
    return geometry.sizeY - size + geometry.y;
  case "SW":
    return geometry.y;
  case "SE":
    return geometry.y;
  default:
    return geometry.y;
  }
};

const calcSize = ({clientX, clientY, proportional, geometry, orientation })=>{

  let newSizeX;
  let newSizeY;

  const { x, y, sizeX, sizeY} = geometry;

  switch(orientation){
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

    let mashResize ;
    if(reSizeX <1 && reSizeY < 1){
      mashResize = reSizeX < reSizeY ? reSizeX : reSizeY;
    } else {
      mashResize = reSizeX > reSizeY ? reSizeX : reSizeY;
    }

    newSizeX = Math.floor(sizeX * mashResize);
    newSizeY = Math.floor(sizeY * mashResize);
  }

  return {
    newSizeX,
    newSizeY
  };
};

const style = {
  NW: {
    left: 0,
    top: 0
  },
  NE: {
    right: 0,
    top: 0
  },
  SW: {
    left: 0,
    bottom: 0
  },
  SE: {
    right: 0,
    bottom: 0
  },
  center: {
    right: '49%',
    left: '49%',
    top: '49%',
    bottom: '49%'
  }
};


class Point extends React.Component{
  _getStyle=()=>{
    switch(this.props.orientation){
    case"NW":
      return style.NW;
    case"NE":
      return style.NE;
    case"SW":
      return style.SW;
    case"SE":
      return style.SE;
    default:
      return style.center;
    }
  }

  _handleOnDragStart=()=>{

  }

  _handleOnDrag=(e)=>{
    const {clientX, clientY } = e;
    if(clientX >0 && clientX>0){
    const { geometry } = this.props.block;
    const { orientation }  = this.props;
    const {
      newSizeX,
      newSizeY
    } = calcSize({
      clientX,
      clientY,
      proportional: isProportional(this.props.block.type),
      geometry,
      orientation
    });
      const x = xCoordianate ( geometry, this.props.block.type , newSizeX);
      const y = xCoordianate ( geometry, this.props.block.type , newSizeY);
      this.props.handleSizeChange.update({
        x,
        y,
      newSizeX,
      newSizeY
    });}
  }
  _handleOnDragEnd=()=>{
    const { orientation }  = this.props;
   this.props.handleSizeChange.stop({
      id: this.props.id,
      orientation
    });
  }
  _hadleOnClick=()=>{
    this.props.handleSizeChange.start();
  }
  render(){
    return(
        <div
      style={this._getStyle()}
      draggable="true"
      className="control-point"
      onClick={this._handleOnClick}
      onDragStart={this._handleOnDragStart}
      onDrag={this._handleOnDrag}
      onDragEnd={this._handleOnDragEnd}
        >
        </div>
    );
  }
}

const PointWrapper = (props) =>{
  return(
      <EditingSpaceContext.Consumer>
      {context => <Point {...props} actions={context.actions}/>}
      </EditingSpaceContext.Consumer>
  )
};

class PointControl extends React.Component{
  render(){
    const orientation =["NW", "NE", "SW", "SE"];
    return(
        <div>
        {orientation.map((or)=>{
          return(
              <PointWrapper
            key={or}
            orientation={or}
            id={this.props.id}
            block={this.props.block}
            handleSizeChange={this.props.handleSizeChange}
              />);
        })}
        </div>);
  }
};

export default PointControl;
