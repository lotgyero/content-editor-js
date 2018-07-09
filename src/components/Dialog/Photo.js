import React from 'react';
// import PropTypes from 'prop-types';

class PhotoButton extends React.Component{
  state ={
    file: '',
    imagePreviewUrl: ''
  }

  _handleSubmit(e){
    e.preventDefault();
    console.log('handle upload', this.state.file);
  }

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

  render(){
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt="upload photo" />);
    } else {
      $imagePreview = (<div className="imegeRequest">Пожалуйста выберете Картинку</div>);
    };
    return(
      <div className="imageSelector">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
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
          <div className="imgPrev">
            {$imagePreview}
          </div>
        </form>
      </div>);
  }
}

// PhotoButton.propTypes = {

// };

export default PhotoButton;
