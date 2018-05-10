let tickets = [];

export default function(state = tickets, action) {
	if (action.type === 'STOPS_UPDATED') {
		let newState = [].concat(tickets);

		let stopsArray = [];
		action.payload.stops.forEach(item => {
			if (item.value > -1 && item.checked) {
				stopsArray.push(item.value)
			}
		});

		newState = newState.sort((a, b) => a.price - b.price);
		return newState.filter(item => stopsArray.includes(item.stops)).sort((a, b) => a.price - b.price);
	}

	if (action.type === 'TICKETS_LOADED') {
		tickets = [].concat(action.payload.tickets);
		tickets = tickets.sort((a, b) => a.price - b.price);
		return tickets;
	}

	state = state.sort((a, b) => a.price - b.price);

	return state;
};
