import { h } from 'preact';
import style from './style.css';

const Hotel = (props) => (
  <div class={props.isActive || props.hotelData.isHovered ? style['active-card'] : style.card} id={`hotel-${props.hotelData?.id}`}>
    <div class={style['card-info']}>
      <div class={style['card-img']}>
        <img src={props.hotelData?.image} alt="Paris" width="120" height="140" />
      </div>
      <div class={style['card-description']}>
        <h4 class={style['card-header']}>{props.hotelData?.title}</h4>
        <span class={style['card-distance']}>{props.hotelData?.description}</span>
        <span class={style['card-price']}>€ {props.hotelData?.price}</span>
        <span class={style['card-disclaimer']}>{props.hotelData?.priceDescription}</span>
      </div>
    </div>
    <div class={style['card-row']}>
      <button class={style['button']}>
        Book
        </button>
    </div>
  </div>
);

export default Hotel;
