import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ticket from '../components/Ticket';

class Tickets extends Component {
	render() {
		const { currencies } = this.props;
		const currency = currencies && currencies.length ? currencies.find(item => item.checked) : null;

		return (
			<div className="tickets">
				{
					this.props.tickets && this.props.tickets.length
					? this.props.tickets.map((item, i) => <Ticket currency={currency} key={`ticket-${i}`} data={item} />)
					: <strong className="tickets__not-found">Ничего не найдено...</strong>
				}
			</div>
		);
	}
}

Tickets.propTypes = {
	tickets: PropTypes.array.isRequired,
	currencies: PropTypes.array.isRequired
}

function mapStateToProps(state) {
	return {
		tickets: state.tickets,
		currencies: state.currencies
	}
}

export default connect(mapStateToProps)(Tickets);
