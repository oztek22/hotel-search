import { h } from 'preact';
import {BurgerIcon, Logo} from '../assets';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<div class={style.logo} ><Logo /></div>
		<div class={style.burgerMenu}><BurgerIcon /></div>
	</header>
);

export default Header;
