const stops = [
	{name: 'Все', value: -1, checked: true},
	{name: 'Без пересадок', value: 0, checked: true},
	{name: '1 пересадка', value: 1, checked: true},
	{name: '2 пересадки', value: 2, checked: true},
	{name: '3 пересадки', value: 3, checked: true}
];

export default function(state = stops, action) {
	if(action.type === 'STOPS_UPDATED') {
		return [].concat(action.payload.stops);
	}

	return state;
};
