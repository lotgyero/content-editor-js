import React from 'react';
import PropTypes from 'prop-types';

class Thumbnail extends React.Component {

  render(){
    const {
      sizeX,
      sizeY
    } = this.props.geometry;

    const style={
      height: `${sizeY-20}px`,
      width: `${sizeX-20}px`
    };
    return(
        <div className="thumbnail" draggable="false" >
        <img draggable="false" style={style} src={this.props.data.dataUri} alt="thumbnail"/>
      </div>);
  }
};

Thumbnail.propTypes = {
  data: PropTypes.shape({
    dataUri: PropTypes.string.isRequired
  }),
  geometry: PropTypes.shape({
    sizeX: PropTypes.number.isRequired,
    sizeY: PropTypes.number.isRequired
  }).isRequired
};


export default Thumbnail;
