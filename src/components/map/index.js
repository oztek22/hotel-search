import { h, Component } from 'preact';
import style from './style.css';
import hotelsJson from '../../assets/hotels.json';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker';
import Hotel from '../hotel';

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
    console.log('onChange', event);
    this.setState({ hotels: hotelsJson });
  }

  onChildMouseEnter = (childIndex) => {
    this.setState({ activeHotel: this.state.hotels[childIndex].id });
    this.scrollTo(document.getElementById(`hotel-${this.state.hotels[childIndex].id}`));
  }

  onChildMouseLeave = (childIndex) => {
    this.setState({ activeHotel: -1 });
    this.scrollTo(document.getElementById(`hotel-${this.state.hotels[childIndex].id}`));
  }

  onChildClick = (childIndex) => {
    this.setState({ activeHotel: this.state.hotels[childIndex].id });
    this.scrollTo(document.getElementById(`hotel-${this.state.hotels[childIndex].id}`));
  }

  scrollTo(el) {
    const marginLeft = 8;
    el.parentNode.scrollLeft = el.offsetLeft - marginLeft;
  }

  render() {
    return (
      <div class={style.wrapper}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAP_KEY }}
          defaultCenter={this.props.defaultLocation}
          defaultZoom={this.props.defaultZoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
          onChange={this.onChange}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
          onChildClick={this.onChildClick}
        >
          {
            this.state.hotels && this.state.hotels.map(hotelData => (
              <Marker lat={hotelData.coordinates.lat}
                lng={hotelData.coordinates.lng}
                id={hotelData.id}
                data={hotelData}
                isActive={this.state?.activeHotel === hotelData.id}
              />
            ))
          }
        </GoogleMapReact>
        <section style={{ top: `-${this.cardsWrapperHeight}px` }}>
          <div class={style['cards-wrapper']} ref={(elem) => this.cardsWrapperHeight = elem?.clientHeight ? elem.clientHeight : 277}>
            {this.state.hotels && this.state.hotels.map(hotelData => (
              <Hotel hotelData={hotelData} id={hotelData.id}
              isActive={this.state?.activeHotel === hotelData.id} />
            ))
            }
          </div>
        </section>
      </div>
    )
  }
}

