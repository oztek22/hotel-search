import { h, Component } from 'preact';
import style from './style.css';
import hotelsJson from '../../assets/hotels.json';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker/marker';

export default class Map extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleApiLoaded = (map, maps) => {
    // use map and maps objects
    console.log(map, maps);
  };

  onChange = (event) => {
    // send center and zoom value to backend and get currosponding hotel details accordignly
    console.log(event);
    console.log(hotelsJson);
    this.setState({hotels: hotelsJson});
  }

  onChildMouseEnter = (childIndex) => {
    const hotels = this.state.hotels;
    hotels[childIndex].isActive = true;
    this.setState(hotels);
  }

  onChildMouseLeave = (childIndex) => {
    const hotels = this.state.hotels;
    hotels[childIndex].isActive = false;
    this.setState(hotels);
  }

  render() {
    console.log("state", this.state);
    return (
      <div class={style.wrapper}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBhu4l8Pik9wZqNH8LVm6yu73IBIvexIvE' }}
          defaultCenter={this.props.defaultLocation}
          defaultZoom={this.props.defaultZoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
          onChange={this.onChange}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
        >
          {
            this.state.hotels && this.state.hotels.map(hotelData => (
              <Marker lat={hotelData.coordinates.lat}
                lng={hotelData.coordinates.lng}
                id={hotelData.id}
                data={hotelData} />
            ))
          }
        </GoogleMapReact>
      </div>
    )
  }
}

