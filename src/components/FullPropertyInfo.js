import React, {Component} from 'react';
import axios from 'axios';

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
        console.log(this.state.fullInfoList)
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
          <div>
            <img src = {this.state.fullInfoList[0].images[0]}/>
            <img src = {this.state.fullInfoList[0].images[1]}/>
            <img src = {this.state.fullInfoList[0].images[2]}/>
            <img src = {this.state.fullInfoList[0].images[3]}/>
            <div> {this.state.fullInfoList[0].id} </div>
            <div> {this.state.fullInfoList[0].title} </div>
            <div> {this.state.fullInfoList[0].id} </div>
            <div> {this.state.fullInfoList[0].address} </div>
            <div> {this.state.fullInfoList[0].price} </div>
            <div> {this.state.fullInfoList[0].description} </div>
            <div> {this.state.fullInfoList[0].sellerName} </div>
          </div>

        }
      </div>
    )
  }
}

export default FullPropertyInfo;
