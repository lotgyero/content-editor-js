import React from 'react';
import PropTypes from 'prop-types';
import { DialogActionContext } from './';

import Thumbnail from '../Thumbnail';

const PhotoContextWrapper = props => {
  return (
    <DialogActionContext.Consumer>
      {context => <Photo {...props} actions={context} />}
    </DialogActionContext.Consumer>
  );
};

class Photo extends React.Component {
  state = {
    file: false,
    imagePreviewUrl: ''
  };

  _handleSubmit = e => {
    e.preventDefault();
    const photoThis = this;
    if (this.state.file) {
      const dumpImg = document.createElement('img');
      let sizeX, sizeY;
      dumpImg.onload = function() {
        sizeX = this.width;
        sizeY = this.height;
        photoThis.props.actions.blockCreate(
          'Photo',
          {
            file: photoThis.state.file,
            dataUri: photoThis.state.imagePreviewUrl
          },
          {
            sizeX,
            sizeY
          }
        );
        photoThis.props.actions.dialogHide();
      };
      dumpImg.src = this.state.imagePreviewUrl;
    }
  };

  _handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  _showThumbnail = () => {
    const block = {
      type: 'Photo',
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
    return <Thumbnail block={block} />;
  };
  render() {
    return (
      <div className="imageSelector">
        <input
          ref="upload"
          className="fileInput"
          type="file"
          accept="image/*"
          onChange={e => {
            this._handleImageChange(e);
          }}
        />
        <button
          className="submitButton"
          type="submit"
          onClick={e => this._handleSubmit(e)}
        >
          Загрузить фото
        </button>
        {this.state.imagePreviewUrl ? this._showThumbnail() : ''}
      </div>
    );
  }
}

Photo.propTypes = {
  actions: PropTypes.shape({
    blockCreate: PropTypes.func.isRequired,
    dialogHide: PropTypes.func.isRequired
  }).isRequired
};

export default PhotoContextWrapper;
