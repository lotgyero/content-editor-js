import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from './Thumbnail';
import PointControl from './PointControl';
import {EditingSpaceContext} from './EditingSpace';

const ContentBlockWrapper = (props)=>{
  return(
    <EditingSpaceContext.Consumer>
      {context => <ContentBlock {...props} actions={context.actions}/>}
    </EditingSpaceContext.Consumer>
  );
};


class ContentBlock extends React.Component {
  state={
    clientX: 0,
    clientY: 0,
    sizeChange: false,
    sizeX: this.props.block.geometry.sizeX,
    sizeY: this.props.block.geometry.sizeY
  }
  handleSizeChangeStart=()=>{
    console.log('Size change start');
    this.setState({
      sizeChange: true
    });
  }
  handleSizeChangeStop=()=>{
    console.log('Size change stop');
    this.setState({
      sizeChange: false
    });
  }
  handleSizeUpdate=()=>{
    console.log('Change size');
  }
  _handleOnDragEnd=(e)=>{
    const {clientX, clientY } = e;
    const newClientX =  clientX - this.state.clientX;
    const newClientY =  clientY - this.state.clientY;
    this.props.actions.blockMove(this.props.id, newClientX, newClientY);
  }

  _handleOnDragStart=(e)=>{
    const {clientX, clientY } = e;
    const {x, y }= this.props.block.geometry;
    this.setState({
      clientX:  clientX - x,
      clientY:  clientY - y
    });
  }

  _selectBlock=()=>{
    this.props.actions.blockSelect(this.props.type, this.props.id);
  }

  render(){
    const {
      sizeX,
      sizeY,
      x,
      y
    } = this.props.block.geometry;
    const style={
      height: sizeY,
      width: sizeX,
      position: "absolute",
      left: x,
      top: y
    };
    const actions ={
        start: this.handleSizeChangeStart,
        stop:  this.handleSizeChangeStop,
        update:  this.handleSizeUpdate
    };
    return(
      <div style={style} className="content-block">
        <PointControl
      block={this.props.block}
      id={this.props.id}
      handleSizeChange={actions}
        />
        <div
          draggable="true"
          className="contentBlock"
          onDragStart={this._handleOnDragStart}
          onDragEnd={this._handleOnDragEnd}
        >
        <Thumbnail block={this.props.block}  />
        </div>
      </div>
    );
  }
};

ContentBlock.propTypes = {
  block : PropTypes.shape({
    type: PropTypes.oneOf(["Photo", "Video"]).isRequired,
    data: PropTypes.shape({
      dataUri: PropTypes.string.isRequired
    }).isRequired,
    geometry: PropTypes.shape({
      sizeX: PropTypes.number.isRequired,
      sizeY: PropTypes.number.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default ContentBlockWrapper;
