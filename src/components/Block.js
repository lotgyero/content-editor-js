import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from './Thumbnail';

class ContentBlock extends React.Component {
  _sizeImage=()=>{
    const {x1, y1, x2, y2} = this.props.geometry;
    const sizeX = x2 -x1;
    const sizeY = y2 -y1;
  };
  render(){
    return(<div className="contentBlock">
      <Thumbnail data={this.props.data} type={this.props.type}/>
    </div>);
  }
};

ContentBlock.propTypes = {
  type: PropTypes.oneOf(["Photo", "Video"]).isRequired,
  data: PropTypes.shape({
    dataUri: PropTypes.string.isRequired,
    geometry: PropTypes.shape({
      sizeX: PropTypes.number.isRequired,
      sizeY: PropTypes.number.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default ContentBlock;
