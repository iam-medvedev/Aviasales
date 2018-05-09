import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ticket from '../components/Ticket';

class Tickets extends Component {
	render() {
		return (
			<div className="tickets">
				{this.props.tickets.map((item, i) => <Ticket key={`ticket-${i}`} data={item} />)}
			</div>
		);
	}
}

Tickets.propTypes = {
	tickets: PropTypes.array.isRequired
}

function mapStateToProps(state) {
	return {
		tickets: state.tickets
	}
}

export default connect(mapStateToProps)(Tickets);