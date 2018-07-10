import React from 'react';
import PropTypes from 'prop-types';

class PhotoThumbnail extends React.Component{

  render(){
    console.log('PhotoThumbnail', this.props);
    const {
      sizeX,
      sizeY
    } = this.props.geometry;

    const style={
      height: `${sizeX}px`,
      width: `${sizeY}px`
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
