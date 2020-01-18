import React, {Component} from 'react';
import axios from 'axios';

class PropertiesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listIsEmpty: true
    }
    this.getPropertiesList = this.getPropertiesList.bind(this);
    this.getPropertiesList()
  }

  getPropertiesList() {
    axios.get('http://134.209.138.34/items')
      .then((response) => {
        this.setState({
          propertiesFullList: response.data
        })
        console.log(response.data)
        console.log(this.state.propertiesFullList)
        if (this.state.propertiesFullList.length === 0) {
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
          <div> Empty state</div>
        :
          <div>
          {
            this.state.propertiesFullList.map(propertyId => (
              <div key = {propertyId.id} className = 'flexRow'>
                <img src = {propertyId.previewImage} alt = 'Изображение не загрузилось...'/>
                <div>
                 <div> {propertyId.title} </div>
                 <div> {propertyId.address} </div>
                 <div> {propertyId.id} </div>
                 <div> {propertyId.price} </div>
                </div>
              </div>
            ))
          }
          </div>
      }
      hahaha
      </div>
    )
  }
}

export default PropertiesList;
