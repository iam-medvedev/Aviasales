/**
 * Выбор кол-ва остановок
 */
export const stopSelected = (value) => {
	return (dispatch, getState) => {
		const state = getState();
		let stops = state.stops;

		if (value === -1) {
			const checked = !stops[0].checked;
			stops.forEach(item => item.checked = checked);
		} else {
			let selectedStop = stops.find(item => item.value === value);
			let index = stops.indexOf(selectedStop);

			if (index > -1) {
				stops[index].checked = !stops[index].checked;
			}
		}

		dispatch({
			type: 'STOPS_UPDATED',
			payload: {
				stops
			}
		});
	}
}

/**
 * Выбор "только" остановок
 */
export const stopSelectedOnly = (value) => {
	return (dispatch, getState) => {
		const state = getState();
		let stops = state.stops;

		stops.forEach(item => {
			item.checked = (item.value === value) ? true : false;
		});

		dispatch({
			type: 'STOPS_UPDATED',
			payload: {
				stops
			}
		});
	}
}

/**
 * Загрузка курсов валют
 */
export const loadCurrencyRates = () => {
	return (dispatch, getState) => {
		fetch('https://www.floatrates.com/daily/rub.json')
		.then(response => response.json())
		.then(rates => {
			const state = getState();
			let currencies = state.currencies;

			currencies.forEach(item => {
				let code = item.name.toLowerCase();
				item.rate = rates[code] ? rates[code].rate : 1;
			});

			dispatch({
				type: 'CURRENCY_RATES_LOADED',
				payload: {
					currencies
				}
			});
		});
	}
}

/**
 * Выбор валюты
 */
export const currencySelected = (value) => {
	return (dispatch, getState) => {
		const state = getState();
		let currencies = state.currencies;

		currencies.forEach((item, i) => {
			item.checked = (i === value) ? true : false;
		});

		dispatch({
			type: 'CURRENCY_SELECTED',
			payload: {
				currencies
			}
		});
	}
}

/**
 * Загрузка билетов
 */
export const loadTickets = (payload) => {
	return (dispatch, getState) => {
		dispatch({
			type: 'TICKETS_LOADED',
			payload
		});
	}
}
