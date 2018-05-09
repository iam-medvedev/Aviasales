const initialState = {
	list: [
		{name: 'RUB', checked: true},
		{name: 'USD', checked: false},
		{name: 'EUR', checked: false},
	],
	rates: []
};

export default function(state = initialState, action) {
	return state;
};
