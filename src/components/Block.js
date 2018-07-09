import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from './Thumbnail';

class ContentBlock extends React.Component {
  render(){
    return(<div className="contentBlock">
           <Thumbnail data={this.props.data} type={this.props.type}/>
           </div>);
  }
};

ContentBlock.propTypes = {
  type: PropTypes.oneOf(["Photo", "Video"]).isRequired,
  data: PropTypes.string.isRequired
};

export default ContentBlock;
