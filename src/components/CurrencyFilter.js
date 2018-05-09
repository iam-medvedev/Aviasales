import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CurrencyFilter extends Component {
	render() {
		return (
			<div className="filter-block">
				<div className="filter-block__legend">Валюта</div>
				<div className="currencies">
					{this.props.currencies.list.map((item, i) => {
						return (
							<label key={`currencies-${i}`} className="currencies__button">
								<input type="checkbox" checked={item.checked} onChange={() => console.log} />
								<span>{item.name}</span>
							</label>
						);
					})}
				</div>
			</div>
		);
	}
}

CurrencyFilter.propTypes = {
	currencies: PropTypes.object.isRequired
}

function mapStateToProps(state) {
	return {
		currencies: state.currencies
	}
}

export default connect(mapStateToProps)(CurrencyFilter);
