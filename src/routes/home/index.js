import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';
import Map from '../../components/map';


const Home = () => {
	const defaultLocation = { lat: 100, lng: 200 };
	const defaultZoom = 14;
	const [userLocation, setUserLocation] = useState(defaultLocation);

	useEffect(() => {	
		if (navigator.geolocation) {
			const positionListener = navigator.geolocation.watchPosition((position) => {
				if (Math.abs(position.coords.latitude - userLocation.lat) > 0.0001 || Math.abs(position.coords.longitude - userLocation.lng) > 0.0001) {
					// setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });

					// keeping my location as user location since my hard coded data is based on this location
					setUserLocation({ lat: 48.12317792424179, lng: 11.59038177519047 });
					// we can remove position listener before unmount as well
					navigator.geolocation.clearWatch(positionListener);
				}
			}, (error) => console.warn('geolocation error: ', error));
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div class={style.home}>
			{userLocation.lat !== 100 &&
				<Map defaultLocation={userLocation} defaultZoom={defaultZoom} />}
		</div>
	)
};

export default Home;
