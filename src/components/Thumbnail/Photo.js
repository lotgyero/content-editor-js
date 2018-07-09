import React from 'react';
import PropTypes from 'prop-types';

class PhotoThumbnail extends React.Component{
  render(){
    return(<img src={this.props.data} alt="thumbnail"/>);
  }
};

PhotoThumbnail.propTypes = {
  data: PropTypes.string.isRequired
};

export default PhotoThumbnail;
