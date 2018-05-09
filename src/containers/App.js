import React, { Component } from 'react';

import Tickets from './Tickets';
import Sidebar from './Sidebar';
import Logo from '../assets/logo.svg';

class App extends Component {
	render() {
		return (
			<div className="home">
				<div className="home__logo"><img src={Logo} alt=""/></div>
				<div className="home__wrap">
					<Sidebar />
					<Tickets />
				</div>
			</div>
		)
	}
}

export default App;
