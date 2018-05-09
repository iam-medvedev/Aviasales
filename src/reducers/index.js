import {combineReducers} from 'redux';
import TicketsReducer from './tickets';

export default combineReducers({
	tickets: TicketsReducer
});
