import React, {Component} from 'react';
import axios from 'axios';
import ImageView from './ImageView';
import SellerIcon from './icons/SellerIcon';
import LocationIcon from './icons/LocationIcon';

class FullPropertyInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      listIsEmpty: true,
    }
    this.getFullPropertyInfo = this.getFullPropertyInfo.bind(this);
    this.getFullPropertyInfo();
  }

  getFullPropertyInfo() {
    axios.get(`http://134.209.138.34/item/${this.props.advertismentId}`)
      .then((response) => {
        this.setState({
          fullInfoList: response.data
        })
        if (this.state.fullInfoList.length == 0) {
          this.setState({
            listIsEmpty: true
          })
        } else (
          this.setState({
            listIsEmpty: false
          })
        )
      })
  }
  render() {
    return(
      <div>
        {this.state.listIsEmpty ?
          <div> No full data </div>
          :
          <div className = 'flexAlignCenter' style = {{height:'100vh'}}>
            <ImageView imageArray = {this.state.fullInfoList[0].images} imageId = {this.state.fullInfoList[0].id}/>
            <div className = 'full-advert-info'>
              <div style = {{fontSize:'20px', marginBottom:'15px',marginTop:'15px'}}><SellerIcon/> {this.state.fullInfoList[0].sellerName} </div>
              <div style = {{fontSize:'30px', marginBottom:'15px'}}> {this.state.fullInfoList[0].title} </div>
              <div style = {{fontSize:'20px', color:'#989898', marginBottom:'15px'}}><LocationIcon/> {this.state.fullInfoList[0].address} </div>
              <div style = {{fontSize:'20px', fontWeight:'bold',marginBottom:'15px'}}> {this.state.fullInfoList[0].price} </div>
              <div style = {{fontSize:'20px'}}> {this.state.fullInfoList[0].description} </div>
            </div>
          </div>

        }
      </div>
    )
  }
}

export default FullPropertyInfo;
