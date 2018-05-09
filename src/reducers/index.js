import {combineReducers} from 'redux';
import TicketsReducer from './tickets';
import CurrenciesReducer from './currencies';
import StopsReducer from './stops';

export default combineReducers({
	tickets: TicketsReducer,
	currencies: CurrenciesReducer,
	stops: StopsReducer
});
