import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<h2>Kate Day</h2>
				</header>
				<div className="background">
					<p>
						Hi, I'm Kate. At a very young age, I knew I wanted to work in radio.
						I started when I was 16 and
					</p>
				</div>
				<div className="newBeginnings">
					<p>
						I came to web development cuz I need to MAKE something! I Love
						breathing air into a project and giving it life! Seeing it take
						shape makes me smile becuase i know that it started off as nothing
						but a blank page.
					</p>
				</div>
				<div className="projects">list of projects</div>
				<div className="cv">download my CV!</div>
				<div className="personalLife">
					Family is in Ontario... We moved to Calgary and made it our home in
					2014.
				</div>
			</div>
		);
	}
}

export default App;
