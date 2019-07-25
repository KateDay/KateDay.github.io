import React, { Component } from 'react';
import './styles/App.css';
import NewBeginnings from './NewBeginnings';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<h2>Kate Day</h2>
				</header>
				<Background />
				<NewBeginnings />
				<Prjojects />
				<Resume />
				<PersonalLife />

				
			</div>
		);
	}
}

export default App;
