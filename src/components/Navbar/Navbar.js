import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	};

  	return (
    <>
      <div className="navbar-background">
		<div className="navbar body">
			<NavLink to='/' className='nav-links'>
				<h2>Erica Fu</h2>
			</NavLink>
			<div className="navbar-container">
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<NavLink to='/Resume' className='nav-links' onClick={scrollToTop}>
						<h2>Résumé</h2>
					</NavLink>
					{/* <NavLink to='/About' className='nav-links' onClick={scrollToTop}>
						<h2>About</h2>
					</NavLink> */}
				</ul>
        	</div>
		</div>
      </div>
    </>
  );
}

export default Navbar;