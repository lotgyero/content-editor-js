import React from 'react';

import Thumbnail from '../Thumbnail';

class Video extends React.Component{
  state={
    uri:"https://youtu.be/9bZkp7q19f0"
  };
  _inputCreate=(e)=>{
    e.preventDefault();
    this.props.blockCreate('Video', {
      uri: this.state.uri});
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
        <Thumbnail type="Video" data={this.state.uri}/>
        </div>
    );
  }
}


export default Video;
