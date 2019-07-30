import React, { Component } from 'react';
import './styles/Header.css';

class Header extends Component {
	render() {
		<header>
			<div className="video-container">
				<video autoplay loop muted>
					<source
						src="../build/Radio_Broadcasting_Board_In_Use.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<h1>Kate Day</h1>
		</header>;
	}
}

export default Header;
