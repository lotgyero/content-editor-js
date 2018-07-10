import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from './Thumbnail';

class ContentBlock extends React.Component {
  _handleOnDragEnd=(e)=>{
    console.log(this.props)
    const {clientX, clientY } = e;
    console.log({clientX, clientY });
    this.props.blockMove(this.props.id, clientX, clientY);
  }
  _selectBlock=()=>{
    this.props.blockSelect(this.props.type, this.props.id);
  }
  render(){
    const {
      sizeX,
      sizeY,
      x,
      y
    } = this.props.geometry;
    const style={
      height: sizeX,
      width: sizeY,
      position: "absolute",
      left: x,
      top: y
    };
    return(<div
             draggable="true"
             className="contentBlock"
             style={style}
             onClick={this._selectBlock}
             onDragEnd={this._handleOnDragEnd}
           >
      <Thumbnail data={this.props.data} type={this.props.type} geometry={this.props.geometry} />
    </div>);
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

export default ContentBlock;
