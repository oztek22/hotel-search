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
			navigator.geolocation.getCurrentPosition((position) => {
				if (Math.abs(position.coords.latitude - userLocation.lat) > 0.0001 || Math.abs(position.coords.longitude - userLocation.lng) > 0.0001) {
					setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
				}
			});
		}
	}, []);

	return (
		<div class={style.home}>
			{userLocation.lat !== 100 &&
				<Map defaultLocation={userLocation} defaultZoom={defaultZoom} />}
		</div>
	)
};

export default Home;
