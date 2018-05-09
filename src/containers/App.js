import React, { Component } from 'react';

import Tickets from './Tickets';
import Sidebar from './Sidebar';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Sidebar />
				<Tickets />
			</div>
		)
	}
}

export default App;
