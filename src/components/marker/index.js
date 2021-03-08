import { h } from 'preact';
import { HomeIcon, HomeIconActive } from '../assets';

const Marker = (props) => {

  return (
    <div>{props.isActive || props.data.isHovered ? <HomeIconActive /> : <HomeIcon />}</div>
  )
};

export default Marker;
