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
 * Выбор валюты
 */
export const currencySelected = (value) => {
	return (dispatch, getState) => {
		dispatch({
			type: 'CURRENCY_SELECTED',
			payload: {
				value
			}
		});
	}
}