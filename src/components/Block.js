import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from './Thumbnail';
import PointControl from './PointControl';

class ContentBlock extends React.Component {
  state={
    clientX: 0,
    clientY: 0
  }
  _handleOnDragEnd=(e)=>{
    /* console.log(this.props); */
    const {clientX, clientY } = e;
    /* console.log({clientX, clientY }); */
    const newClientX =  clientX - this.state.clientX;
    const newClientY =  clientY - this.state.clientY;
    this.props.blockMove(this.props.id, newClientX, newClientY);
  }

  _handleOnDragStart=(e)=>{
    const {clientX, clientY } = e;
    /* console.log('onDragStart', clientX, clientY ); */
    this.setState({
      clientX:  clientX - this.props.geometry.x,
      clientY:  clientY - this.props.geometry.y
    });
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
      height: sizeY,
      width: sizeX,
      position: "absolute",
      left: x,
      top: y
    };
             // onClick={this._selectBlock}
    return(
      <div style={style} className="content-block">
        <PointControl type={this.props.type} geometry={this.props.geometry} blockResize={this.props.blockResize} id={this.props.id} />
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

export default ContentBlock;
