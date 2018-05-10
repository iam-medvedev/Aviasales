import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pluralize } from '../utils';
import moment from 'moment';
import 'moment/locale/ru';

class Ticket extends Component {
	constructor(props) {
		super();

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
		return `${count} ${pluralize(count, ['пересадка', 'пересадки', 'пересадок'])}`;
	}

	/**
	 * Формат даты
	 *
	 * @param string str - дата в формате DD.MM.YY
	 * @return string - отформатированная дата
	 */
	_formatDate(str) {
		return moment(str, 'DD.MM.YY').format('DD MMMM YYYY, dd');
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
