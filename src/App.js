import React, { Component } from 'react';
import './styles/App.css';
import Header from './Header';
import Background from './Background';
import NewBeginnings from './NewBeginnings';
import Projects from './Projects';
import Resume from './Resume';
import PersonalLife from './PersonalLife';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Background />
				<NewBeginnings />
				<Projects />
				<Resume />
				<PersonalLife />
			</div>
		);
	}
}

export default App;
