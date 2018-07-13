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
    geometry: {
      x: 0,
      y: 0,
      sizeX: 0,
      sizeY: 0
    }
  }
  componentDidMount=()=>{
    const {
      x, y, sizeX, sizeY
    } = this.props.block.geometry;
    this.setState({
      geometry: {
        x,
        y,
        sizeX,
        sizeY
      },
      sizeChange: false
    });
  };
  handleSizeChangeStart=()=>{
    this.setState({
      geometry: {
        ...this.state.geometry,
        x: this.props.block.geometry.x,
        y: this.props.block.geometry.y,
        sizeX: this.props.block.geometry.sizeX,
        sizeY: this.props.block.geometry.sizeY
      },
      sizeChange: true
    });
  }
  handleSizeChangeStop=({id, orientation})=>{
    this.setState({
      sizeChange: false,
    });
    this.props.actions.blockResize(
      id,
      this.state.geometry.x,
      this.state.geometry.y,
      this.state.geometry.sizeX,
      this.state.geometry.sizeY,
      orientation
    );
  }
  handleSizeUpdate=(data)=>{
    const {
      x,
      y,
      newSizeX,
      newSizeY
    } = data;
    this.setState({
      sizeChange: true,
      geometry:{
        ...this.state.geometry,
        x,
        y,
        sizeX: newSizeX,
        sizeY: newSizeY
      }});
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
    // const {
    //   x,
    //   y
    // } = this.props.block.geometry;
    const style={
      height: this.state.geometry.sizeY,
      width: this.state.geometry.sizeX,
      position: "absolute",
      left: this.state.sizeChange ? this.state.geometry.x : this.props.block.geometry.x,
      top: this.state.sizeChange ? this.state.geometry.y  :this.props.block.geometry.y
    };
    const actions ={
        start: this.handleSizeChangeStart,
        stop:  this.handleSizeChangeStop,
        update:  this.handleSizeUpdate
    };
    const block = {
      ...this.props.block,
      geometry: {
        ...this.props.block.geometry,
        x: this.state.geometry.x,
        y: this.state.geometry.y,
        sizeX: this.state.geometry.sizeX,
        sizeY: this.state.geometry.sizeY,
      }
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
        <Thumbnail block={block}  />
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
