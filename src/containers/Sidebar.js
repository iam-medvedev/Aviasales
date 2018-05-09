import React, { Component } from 'react';
import CurrencyFilter from '../components/CurrencyFilter';
import StopsFilter from '../components/StopsFilter';

class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<CurrencyFilter />
				<StopsFilter />
			</div>
		);
	}
}

export default Sidebar;
