import React from 'react';
import PropTypes from 'prop-types';

class Thumbnail extends React.Component {

  render(){
    const {
      sizeX,
      sizeY
    } = this.props.block.geometry;

    const style={
      height: `${sizeY-20}px`,
      width: `${sizeX-20}px`
    };
    return(
        <div className="thumbnail" draggable="false" >
        <img draggable="false" style={style} src={this.props.block.data.dataUri} alt="thumbnail"/>
      </div>);
  }
};

Thumbnail.propTypes = {
  block: PropTypes.shape({
    data: PropTypes.shape({
      dataUri: PropTypes.string.isRequired
    }),
    geometry: PropTypes.shape({
      sizeX: PropTypes.number.isRequired,
      sizeY: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};


export default Thumbnail;
