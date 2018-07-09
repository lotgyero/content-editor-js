import React from 'react';
import PropTypes from 'prop-types';

class VideoThumbnail extends React.Component{
  // static  defaultProps = {
  //     data:"https://youtu.be/9bZkp7q19f0"
  // };

  getThumbnailURI=(uri)=>{
    const YouTubeGetID=(url)=>{
      url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
    };
    const youId = YouTubeGetID(uri);
    return `http://img.youtube.com/vi/${youId}/maxresdefault.jpg`;
  };

  render(){
    const uri = this.getThumbnailURI(this.props.data);
    return(<img src={uri} alt="thumbnail"/>);
  }
};

VideoThumbnail.propTypes = {
  data: PropTypes.string.isRequired
};


export default VideoThumbnail;
