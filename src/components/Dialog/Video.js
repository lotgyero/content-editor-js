import React from 'react';

import Thumbnail from '../Thumbnail';

class Video extends React.Component{
  render(){
    return(
        <form>
        <Thumbnail type="Video" data="https://youtu.be/9bZkp7q19f0"/>
        </form>
    );
  }
}


export default Video;
