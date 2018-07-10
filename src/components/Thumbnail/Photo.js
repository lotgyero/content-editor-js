import React from 'react';
import PropTypes from 'prop-types';

class PhotoThumbnail extends React.Component{
  render(){
    return(<img src={this.props.data.dataUri} alt="thumbnail"/>);
  }
};

PhotoThumbnail.propTypes = {
  data: PropTypes.object.isRequired
};

export default PhotoThumbnail;
