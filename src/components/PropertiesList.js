import React, {Component} from 'react';
import axios from 'axios';
import LocationIcon from './icons/LocationIcon';
import PropertyLogo from './icons/PropertyLogo';

class PropertiesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listIsEmpty: true
    }
    this.getPropertiesList = this.getPropertiesList.bind(this);
    this.openFullInfoWindow = this.openFullInfoWindow.bind(this);
    this.getPropertiesList()
  }

  getPropertiesList() {
    axios.get('http://134.209.138.34/items')
      .then((response) => {
        this.setState({
          propertiesFullList: response.data
        })
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

  openFullInfoWindow(id) {
    this.props.sendId(id);
    this.props.history.push(`/${id}`);
  }

  render() {
    return(
      <div style = {{paddingTop:'20px'}}>
      <div class = 'property-title'> Недвижимость <PropertyLogo/></div>
      {this.state.listIsEmpty ?
          <div> Empty state</div>
        :
          <div className = 'property-grid' style = {{marginLeft:'2vw', marginRight:'2vw', fontFamily:'Rubik'}}>
          {
            this.state.propertiesFullList.map(propertyId => (
              <div
                key = {propertyId.id}
                className = 'flexColumn'
                onClick = {() => this.openFullInfoWindow(propertyId.id)}
              >
                <div align = 'center' style = {{color:'#989898'}}> №{propertyId.id} </div>
                <img src = {propertyId.previewImage} alt = 'Изображение не загрузилось...' style = {{borderRadius:'5px'}}/>
                <div>
                   <div style = {{color:'#989898',marginTop:'10px'}}><LocationIcon/> {propertyId.address} </div>
                   <div style = {{marginTop:'5px', marginBottom:'5px'}}> {propertyId.title} </div>
                   <div style = {{fontWeight:'bold'}}> {propertyId.price} </div>
                </div>
              </div>
            ))
          }
          </div>
      }
      </div>
    )
  }
}

export default PropertiesList;
