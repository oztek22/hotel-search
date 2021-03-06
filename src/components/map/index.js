import { h, Component } from 'preact';
import style from './style.css';
import GoogleMapReact from 'google-map-react';

export default class Map extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

   handleApiLoaded = (map, maps) => {
    // use map and maps objects
    console.log(map, maps);
  };

  render() {
    return (
      <div class={style.wrapper}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyA1MjTwDCjAj7rHshu4vGANK8v-i4sOULg' }}
            defaultCenter={this.props.defaultLocation}
            defaultZoom={this.props.defaultZoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
          />
      </div>
    )
  }
};

