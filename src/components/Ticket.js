import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ticket extends Component {
	constructor(props) {
		super();

		// https://caniuse.com/#search=intl (ie 11, edge - поддерживают)
		this._pluralRules = new Intl.PluralRules();
		this._langDefinition = {one: 'пересадка', few: 'пересадки', many: 'пересадок'};
		this._dateFormatter = new Intl.DateTimeFormat("ru", {
			weekday: 'narrow',
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});

		this._stopsCount = this._stopsCount.bind(this);
		this._formatDate = this._formatDate.bind(this);
		this._formatPrice = this._formatPrice.bind(this);
		this._getCarrierLogo = this._getCarrierLogo.bind(this);
	}

	/**
	 * Склонение пересадок
	 *
	 * @param int count - кол-во пересадок
	 * @return string - 1 пересадка, 2 пересадки, 5 пересадок и т.д.
	 */
	_stopsCount(count) {
		return `${count} ${this._langDefinition[this._pluralRules.select(count)]}`;
	}

	/**
	 * Формат даты
	 * можно заюзать и moment и т.д., но intl тут вполне подходит
	 *
	 * @param string str - дата в формате DD.MM.YY
	 * @return string - отформатированная дата
	 */
	_formatDate(str) {
		const dateParts = str.split('.');
		let result = '';

		if (dateParts && dateParts.length) {
			const dateObject = new Date(`20${dateParts[2]}`, dateParts[1] - 1, dateParts[0]);
			let formattedDate = {};
			this._dateFormatter.formatToParts(dateObject).forEach(el => formattedDate[el.type] = el.value);

			result = `${formattedDate.day} ${formattedDate.month} ${formattedDate.year}, ${formattedDate.weekday}`;
		}

		return result;
	}

	/**
	 * Формат цены
	 *
	 * @param int price - цена
	 * @return string - отформатированная цена
	 */
	_formatPrice(price) {
		const f = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: this.props.currency.name });
		return f.format(price * (this.props.currency.rate || 1));
	}

	/**
	 * Получение ссылки на лого авиакомпании
	 *
	 * @param srting carrier - цена
	 * @return string - ссылка на лого 120x35
	 */
	_getCarrierLogo(carrier) {
		return `https://pics.avs.io/120/35/${carrier}@2x.png`;
	}

	render() {
		const { data } = this.props;

		return (
			<div className="ticket">
				<div className="ticket-left">
					<div className="ticket-left__logo">
						<img src={this._getCarrierLogo(data.carrier)} alt=""/>
					</div>
					<div className="ticket-left__action">
						<button>
							Купить за {this._formatPrice(data.price)}
						</button>
					</div>
				</div>
				<div className="ticket-right flight">
					<div className="flight-time">
						<div className="flight-time__from">
							{data.departure_time}
						</div>
						<div className="flight-time__path">
							<span className="flight-time__path-count">{data.stops ? this._stopsCount(data.stops) : ''}</span>
						</div>
						<div className="flight-time__to">
							{data.arrival_time}
						</div>
					</div>
					<div className="flight-data">
						<div className="flight-data__city">
							<strong className="flight-data__city-name">{data.origin}, {data.origin_name}</strong>
							<span className="flight-data__city-date">{this._formatDate(data.departure_date)}</span>
						</div>
						<div className="flight-data__city">
							<strong className="flight-data__city-name">{data.destination_name}, {data.destination}</strong>
							<span className="flight-data__city-date">{this._formatDate(data.arrival_date)}</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Ticket.propTypes = {
	data: PropTypes.object.isRequired,
	currency: PropTypes.object.isRequired
}

export default Ticket;
