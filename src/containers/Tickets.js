import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ticket from '../components/Ticket';

class Tickets extends Component {
	render() {
		let tickets = [];
		tickets = this.props.tickets.sort((a, b) => a.price - b.price);

		return (
			<div className="tickets">
				{tickets.map((item, i) => <Ticket key={`ticket-${i}`} data={item} />)}
			</div>
		);
	}
}

Tickets.propTypes = {
	tickets: PropTypes.array.isRequired
}

export default Tickets;
