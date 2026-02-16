import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({title, next, nextLink}) {

	const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'auto'});
	};

	const [homeHovered, setHomeHovered] = useState(false);
	const [nextHovered, setNextHovered] = useState(false);


  	return (
		<div className="navbar">
			<NavLink
				to='/'
				className='nav-bar-links'
				onClick={scrollToTop}
				onMouseEnter={() => setHomeHovered(true)}
				onMouseLeave={() => setHomeHovered(false)}
			>
				<small>{homeHovered ? 'Back to home' : 'Erica Fu'}</small>
			</NavLink>

			<small className="nav-bar-page-title">{title}</small>

			<NavLink
				to={nextLink}
				className='nav-bar-links right'
				onClick={scrollToTop}
				onMouseEnter={() => setNextHovered(true)}
				onMouseLeave={() => setNextHovered(false)}
			>
				<small>{nextHovered ? `View ${next}` : `Up next: ${next}`}</small>
			</NavLink>
		</div>
	);
}

export default Navbar;