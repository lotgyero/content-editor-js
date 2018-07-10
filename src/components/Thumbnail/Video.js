import React from 'react';
import PropTypes from 'prop-types';

class VideoThumbnail extends React.Component{
  // static  defaultProps = {
  //     data:"https://youtu.be/9bZkp7q19f0"
  // };

  _getThumbnailURI=(uri)=>{
    const YouTubeGetID=(url)=>{
      url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
    };
    const youId = YouTubeGetID(uri);
    return `http://img.youtube.com/vi/${youId}/0.jpg`;
  };

  render(){

    console.log('VideoThumbnail', this.props);
    const {
      sizeX,
      sizeY
    } = this.props.geometry;

    const style={
      height: `${sizeY-20}px`,
      width: `${sizeX-20}px`
    };

    const uri = this._getThumbnailURI(this.props.data.dataUri);
    return(<img src={uri} style={style} draggable="false" alt="thumbnail"/>);
  }
};

VideoThumbnail.propTypes = {
  data: PropTypes.object.isRequired,
  geometry: PropTypes.shape({
    sizeX: PropTypes.number.isRequired,
    sizeY: PropTypes.number.isRequired
  }).isRequired
};


export default VideoThumbnail;
