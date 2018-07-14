import React from 'react';
import PropTypes from 'prop-types';

import { DialogActionContext } from './';
import Thumbnail from '../Thumbnail';

const getThumbnailURI = uri => {
  const YouTubeGetID = url => {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
  };
  const youId = YouTubeGetID(uri);
  return `http://img.youtube.com/vi/${youId}/0.jpg`;
};

const VideoContextWrapper = props => {
  return (
    <DialogActionContext.Consumer>
      {context => <Video {...props} actions={context} />}
    </DialogActionContext.Consumer>
  );
};

class Video extends React.Component {
  state = {
    uri: 'https://youtu.be/9bZkp7q19f0',
    imagePreviewUrl: getThumbnailURI('https://youtu.be/9bZkp7q19f0')
  };

  _inputCreate = e => {
    e.preventDefault();
    const videoThis = this;
    const dumpImg = document.createElement('img');
    let sizeX, sizeY;
    dumpImg.onload = function() {
      sizeX = this.width;
      sizeY = this.height;
      videoThis.props.actions.blockCreate(
        'Video',
        {
          uri: videoThis.state.uri,
          dataUri: videoThis.state.imagePreviewUrl
        },
        {
          sizeX,
          sizeY
        }
      );
      videoThis.props.actions.dialogHide();
    };
    dumpImg.src = this.state.imagePreviewUrl;
  };
  _inputChange = e => {
    e.preventDefault();

    const value = e.target.value;
    this.setState(prev => {
      return {
        ...prev,
        uri: value,
        imagePreviewUrl: getThumbnailURI(value)
      };
    });
  };
  render() {
    const block = {
      type: 'Video',
      data: {
        dataUri: this.state.imagePreviewUrl
      },
      geometry: {
        sizeX: 200,
        sizeY: 200,
        x: 0,
        y: 0
      }
    };
    return (
      <div>
        <input
          type="text"
          onChange={this._inputChange}
          value={this.state.uri}
        />
        <input type="submit" value="Создать" onClick={this._inputCreate} />
        <Thumbnail block={block} />
      </div>
    );
  }
}

Video.propTypes = {
  actions: PropTypes.shape({
    blockCreate: PropTypes.func.isRequired,
    dialogHide: PropTypes.func.isRequired
  }).isRequired
};

export default VideoContextWrapper;
