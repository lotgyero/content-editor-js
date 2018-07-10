import React from 'react';

import Thumbnail from '../Thumbnail';

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
    this.props.blockCreate('Video', {
      uri: this.state.uri,
      dataUri: this._getThumbnailURI(this.state.uri),
      geometry:{
        sizeX: 100,
        sizeY: 100,
        x:0,
        y:0
      }
    });
    this.props.hideDialog();
  }
  _inputChange=(e)=>{
    e.preventDefault();
    console.log(e.target.value);
    const value = e.target.value;
    this.setState(prev =>{
      return {
        ...prev,
        uri: value
      };
    });
  };
  render(){
    console.log('video dialog',this.props);
    return(
      <div>
        <input type='text'onChange={this._inputChange} value={this.state.uri}/>
        <input type="submit" value="Создать" onClick={this._inputCreate}/>
        <Thumbnail type="Video" data={{
          dataUri: this.state.uri,
          geometry:{
            sizeX: 100,
            sizeY: 100,
            x:0,
            y:0
          }
        }}/>
        </div>
    );
  }
}


export default Video;
