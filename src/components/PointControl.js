/*
     N
  NW   NE
W          E
  SW   SE
     S
*/
import React from 'react';

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
    const {clientX, clientY } = e;
  }
  _handleOnDragEnd=(e)=>{
    const {clientX, clientY } = e;
    let sizeX;
    let sizeY;
    let proportional = false;

    switch(this.props.type){
    case "Photo":
      proportional = true;
      break;
    case "Video":
      proportional = false;
      break;
    default:
      proportional = false;
    };

    switch(this.props.orientation){
    case"NW":
      sizeX =  this.props.geometry.sizeX - clientX + this.props.geometry.x;
      sizeY = this.props.geometry.sizeY - clientY + this.props.geometry.y ;
      break;
    case"NE":
      sizeX = clientX - this.props.geometry.x;
      sizeY = this.props.geometry.y - clientY + this.props.geometry.sizeY ;
      break;
    case"SW":
      sizeX = this.props.geometry.x - clientX + this.props.geometry.sizeX ;
      sizeY = clientY - this.props.geometry.y;
      break;
    case"SE":
      sizeX = clientX - this.props.geometry.x;
      sizeY = clientY - this.props.geometry.y;
      break;
    default:
      break;
    }

    if(proportional){
      let newSize = sizeX < sizeY ? sizeX: sizeY;
      this.props.blockResize( this.props.id, newSize, newSize, this.props.orientation);
    } else {
      this.props.blockResize( this.props.id, sizeX, sizeY, this.props.orientation);
    }
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

class PointControl extends React.Component{
  render(){
    return(
        <div>

        <Point
      orientation="NW"
      id={this.props.id}
      type={this.props.type}
      blockResize={this.props.blockResize}
      geometry={this.props.geometry} />

        <Point
      orientation="NE"
      id={this.props.id}
      type={this.props.type}
      blockResize={this.props.blockResize}
      geometry={this.props.geometry} />

        <Point
      orientation="SW"
      id={this.props.id}
      type={this.props.type}
      blockResize={this.props.blockResize}
      geometry={this.props.geometry} />

        <Point
      orientation="SE"
      id={this.props.id}
      type={this.props.type}
      blockResize={this.props.blockResize}
      geometry={this.props.geometry} />

        </div>);
  }
};

export default PointControl;
