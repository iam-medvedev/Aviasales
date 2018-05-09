import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tickets from './Tickets';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Tickets tickets={this.props.tickets} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		tickets: state.tickets
	}
}

export default connect(mapStateToProps)(App);
