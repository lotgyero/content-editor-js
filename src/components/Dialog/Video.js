import React from 'react';
import { DialogActionContext } from './';

import Thumbnail from '../Thumbnail';

const VideoContextWrapper = (props)=>{
  return(
    <DialogActionContext.Consumer>
      {context => <Video actions={context}/>}
    </DialogActionContext.Consumer>
  );
};

class Video extends React.Component{
  state={
    uri:"https://youtu.be/9bZkp7q19f0"
  };

  _getThumbnailURI=(uri)=>{
    const YouTubeGetID=(url)=>{
      url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
    };
    const youId = YouTubeGetID(uri);
    return `http://img.youtube.com/vi/${youId}/0.jpg`;
  };

  _inputCreate=(e)=>{
    e.preventDefault();
    this.props.actions.blockCreate(
      'Video',
      {
        uri: this.state.uri,
        dataUri: this._getThumbnailURI(this.state.uri)
      },
      {
        sizeX: 200,
        sizeY: 200,
        x:0,
        y:0
      }
    );
    this.props.actions.hideDialog();
  }
  _inputChange=(e)=>{
    e.preventDefault();

    const value = e.target.value;
    this.setState(prev =>{
      return {
        ...prev,
        uri: value
      };
    });
  };
  render(){

    return(
      <div>
        <input type='text'onChange={this._inputChange} value={this.state.uri}/>
        <input type="submit" value="Создать" onClick={this._inputCreate}/>
        <Thumbnail type="Video" data={{
          dataUri: this.state.uri
        }}
      geometry={{
        sizeX: 200,
        sizeY: 200,
        x:0,
        y:0
      }}
        />
        </div>
    );
  }
}


export default VideoContextWrapper;
