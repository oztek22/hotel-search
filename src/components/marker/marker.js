import { h } from 'preact';
import { HomeIcon, HomeIconActive } from '../assets';

const Marker = (props) => {

  return (
    <div>{props.data.isActive ? <HomeIconActive /> : <HomeIcon />}</div>
  )
};

export default Marker;
