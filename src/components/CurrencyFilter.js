import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currencySelected } from '../actions/';

class CurrencyFilter extends Component {
	render() {
		return (
			<div className="filter-block">
				<div className="filter-block__legend">Валюта</div>
				<div className="currencies">
					{this.props.currencies.map((item, i) => {
						return (
							<label key={`currencies-${i}`} className="currencies__button">
								<input type="checkbox" checked={item.checked} onChange={() => this.props.currencySelected(i)} />
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
	currencies: PropTypes.array.isRequired,
	currencySelected: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return {
		currencies: state.currencies
	}
}

function mapDispatchToProps(dispatch) {
	return {
		currencySelected: bindActionCreators(currencySelected, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyFilter);
