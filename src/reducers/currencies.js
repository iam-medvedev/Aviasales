const currencies = [
	{name: 'RUB', checked: true},
	{name: 'USD', checked: false},
	{name: 'EUR', checked: false},
];

export default function(state = currencies, action) {
	if (action.type === 'CURRENCY_SELECTED' || action.type === 'CURRENCY_RATES_LOADED') {
		return [].concat(action.payload.currencies);
	}

	return state;
};
