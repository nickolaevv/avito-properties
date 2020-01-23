import React, {Component} from 'react';
import BackwardArrow from './icons/BackwardArrow';
import ForwardArrow from './icons/ForwardArrow';

class ImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 0
    }
    this.selectImage = this.selectImage.bind(this);
    this.forwardImage = this.forwardImage.bind(this);
    this.backwardImage = this.backwardImage.bind(this);
  }

  selectImage = (index) => {
    this.setState({
      selectImage: index
    })
  }

  forwardImage = (event) => {
    var currentIndex = this.state.selectedImage;
    if (currentIndex < this.props.imageArray.length-1){
      currentIndex++
    } else {
      currentIndex = 0
    }
    this.setState({
      selectedImage: currentIndex
    })
  }

  backwardImage = (event) => {
    var currentIndex = this.state.selectedImage;
    if (currentIndex > 0){
      currentIndex--
    } else {
      currentIndex = this.props.imageArray.length-1
    }
    this.setState({
      selectedImage: currentIndex
    })
  }

  render() {
    return(
      <div className = 'flexRow'>
        <div className = 'flexRowAlignCenter'>
          <button className = 'image-handle-button' onClick = {this.backwardImage}><BackwardArrow/></button>
            <div align = 'center' style = {{width:'750px', height:'500px', display:'flex', alignItems:'center', justifyContent:'center'}}><img src = {this.props.imageArray[this.state.selectedImage]}/></div>
          <button className = 'image-handle-button' onClick = {this.forwardImage}><ForwardArrow/></button>
        </div>
        {
          this.props.imageArray.map((imageId,index) => (
            <img className = 'image-preview'  src = {imageId} alt = 'Не удалось загрузить изображение' onClick = {() => this.setState({ selectedImage: index})}/>
          ))
        }
      </div>
    )
  }
}

export default ImageView;
