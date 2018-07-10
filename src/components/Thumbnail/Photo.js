import React from 'react';
import PropTypes from 'prop-types';

class PhotoThumbnail extends React.Component{

  render(){

    const {
      sizeX,
      sizeY
    } = this.props.geometry;

    const style={
      height: `${sizeY-20}px`,
      width: `${sizeX-20}px`
    };
    return(<img draggable="false" style={style} src={this.props.data.dataUri} alt="thumbnail"/>);
  }
};

PhotoThumbnail.propTypes = {
  data: PropTypes.object.isRequired,
  geometry: PropTypes.shape({
    sizeX: PropTypes.number.isRequired,
    sizeY: PropTypes.number.isRequired
  }).isRequired
};

export default PhotoThumbnail;
