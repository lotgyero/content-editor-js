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
    clientY: 0
  }
  _handleOnDragEnd=(e)=>{
    const {clientX, clientY } = e;
    const newClientX =  clientX - this.state.clientX;
    const newClientY =  clientY - this.state.clientY;
    this.props.actions.blockMove(this.props.id, newClientX, newClientY);
  }

  _handleOnDragStart=(e)=>{
    const {clientX, clientY } = e;
    this.setState({
      clientX:  clientX - this.props.geometry.x,
      clientY:  clientY - this.props.geometry.y
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
    } = this.props.geometry;
    const style={
      height: sizeY,
      width: sizeX,
      position: "absolute",
      left: x,
      top: y
    };
    console.log(this.props.actions);
    return(
      <div style={style} className="content-block">
        <PointControl type={this.props.type} geometry={this.props.geometry}  id={this.props.id} />
        <div
          draggable="true"
          className="contentBlock"
          onDragStart={this._handleOnDragStart}
          onDragEnd={this._handleOnDragEnd}
        >
          <Thumbnail data={this.props.data} type={this.props.type} geometry={this.props.geometry} />
        </div>
      </div>
    );
  }
};

ContentBlock.propTypes = {
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
};

export default ContentBlockWrapper;
