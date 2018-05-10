import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ticket from '../components/Ticket';
import { loadTickets } from '../actions/';

class Tickets extends Component {
	constructor() {
		super();

		this.state = {
			loading: true
		};

		this._loadTickets = this._loadTickets.bind(this);
		this._loadTickets();
	}

	/**
	 * Загрузка билетов
	 */
	_loadTickets() {
		fetch('./tickets.json')
		.then(response => response.json())
		.then(data => {
			this.props.loadTickets(data);
			this.setState({
				loading: false
			});
		});
	}

	render() {
		const { currencies, tickets } = this.props;
		const currency = currencies && currencies.length ? currencies.find(item => item.checked) : null;

		const isLoading = this.state.loading;

		return (
			<div className="tickets">
				{
					tickets && tickets.length
					? tickets.map((item, i) => <Ticket currency={currency} key={`ticket-${i}`} data={item} />)
					: <strong className="tickets__not-found">{isLoading ? 'Поиск билетов' : 'Ничего не найдено'}...</strong>
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

function mapDispatchToProps(dispatch) {
	return {
		loadTickets: bindActionCreators(loadTickets, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
