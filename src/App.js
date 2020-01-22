import React, {Component} from 'react';
import PropertiesList from './components/PropertiesList';
import FullPropertyInfo from './components/FullPropertyInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { };
    this.getPropertyId = this.getPropertyId.bind(this);
  }

  getPropertyId = (id) => {
    this.setState({
      propertyId: id
    })
  };

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={(props) => <PropertiesList{...props} sendId = {this.getPropertyId}/>}/>
          <Route exact path={`/${this.state.propertyId}`} component={(props) => <FullPropertyInfo advertismentId = {this.state.propertyId}/>}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
