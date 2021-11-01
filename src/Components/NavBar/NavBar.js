import React from 'react';
import './NavBar.scss';

//Icons
import avatar from '../../assets/avatar-icon.svg';
import cart from '../../assets/cart-icon.svg'
import search from '../../assets/search-icon.svg'
import isologo from '../../assets/isologo-black.svg'

const NavBar = () => {
	return (
		<div className='NavBar'>
			<div className="Logo">
				<img src={isologo} alt="isologo" />
				<h2 className="LogoTexto">E-shop</h2>
			</div>
			<div className="MenuContainer">
				<ul className="MenuItems">
					<li className="Item">Men</li>
					<li className="Item">Women</li>
					<li className="Item">Kid</li>
				</ul>
			</div>
			<div className="IconMenuContainer">
				<img src={avatar} alt='Profile'/>
				<img src={cart} alt='Cart'/>
				<img src={search} alt='Search'/>
			</div>
		</div>
	);
};

export default NavBar;