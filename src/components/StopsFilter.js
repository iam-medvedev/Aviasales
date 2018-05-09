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
							<label key={`stops-${i}`} className="stops__button" style={{display: 'block'}}>
								<input type="checkbox" checked={item.checked} onChange={() => this.props.stopSelected(item.value)} />
								<div className="checkbox"></div>
								<span>{item.name}</span>
								{item.value > -1 ? (<button className="stops__only" onClick={() => this.props.stopSelectedOnly(item.value)}>Только</button>) : ''}
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
