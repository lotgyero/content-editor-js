import React from 'react';
import PropTypes from 'prop-types';

import PhotoThumbnail from './Photo';
import VideoThumbnail from './Video';

class Thumbnail extends React.Component {
  _getThumbnail=()=>{
    switch(this.props.type){
    case "Photo":
      return(<PhotoThumbnail data={this.props.data}/>);
    case "Video":
      return(<VideoThumbnail data={this.props.data}/>);
    default:
      break;
    }
  };
  render(){
    return(<div className="thumbnail">{this._getThumbnail()}</div>);
  }
};

Thumbnail.propTypes = {
  type: PropTypes.oneOf(["Photo", "Video"]).isRequired,
  data: PropTypes.string.isRequired
};

export default Thumbnail;
