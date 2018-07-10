import React from 'react';

import Thumbnail from '../Thumbnail';

class Photo extends React.Component{
  state ={
    file: false,
    imagePreviewUrl: ''
  }

  _handleSubmit(e){
    e.preventDefault();
    if(this.state.file){
    this.props.blockCreate(
      'Photo',{
          file: this.state.file,
          dataUri: this.state.imagePreviewUrl
        });

      console.log('handle upload', this.state.file);
      this.props.hideDialog();
    }}

  _handleImageChange(e){
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () =>{
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    if(file){
      reader.readAsDataURL(file);
    }
  }
  _showThumbnail=()=>{
    return(<Thumbnail type="Photo" data={this.state.imagePreviewUrl} />);
  };
  render(){
    return(
      <div className="imageSelector">
        {this.state.imagePreviewUrl ? this._showThumbnail() : ''}
          <input
            ref="upload"
            className="fileInput"
            type="file"
            accept="image/*"
            onChange={(e)=>{this._handleImageChange(e);}}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}
          >
            Загрузить фото
          </button>

      </div>);
  }
}

// Photo.propTypes = {

// };

export default Photo;
