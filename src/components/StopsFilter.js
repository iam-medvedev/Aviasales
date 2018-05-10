import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { stopSelected, stopSelectedOnly } from '../actions/';

class StopsFilter extends Component {
	render() {
		return (
			<div className="filter-block">
				<div className="filter-block__legend">Количество пересадок</div>
				<div className="stops">
					{this.props.stops.map((item, i) => {
						return (
							<label key={`stops-${i}`} className="stops__button">
								<input type="checkbox" checked={item.checked} onChange={() => this.props.stopSelected(item.value)} />
								<div className="stops__button-checkbox"></div>
								<span className="stops__button-name">{item.name}</span>
								{item.value > -1 ? (<button className="stops__button-only" onClick={(e) => { e.preventDefault(); this.props.stopSelectedOnly(item.value) }}>Только</button>) : ''}
							</label>
						);
					})}
				</div>
			</div>
		);
	}
}

StopsFilter.propTypes = {
	stops: PropTypes.array.isRequired,
	stopSelected: PropTypes.func.isRequired,
	stopSelectedOnly: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return {
		stops: state.stops
	}
}

function mapDispatchToProps(dispatch) {
	return {
		stopSelected: bindActionCreators(stopSelected, dispatch),
		stopSelectedOnly: bindActionCreators(stopSelectedOnly, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StopsFilter);
