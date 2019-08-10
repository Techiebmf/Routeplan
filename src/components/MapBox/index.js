/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './style.css';


const mapStyles = {
  width: '100%',
  height: '100%',
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />  
		
      </div>
      );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAgmtah4tami6GIlAtShxGX1BGYQLIICsM'
})(MapContainer);
