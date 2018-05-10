import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import 'core-js/fn/array/find';
import 'core-js/fn/array/includes';

import reducers from './reducers';
import App from './containers/App';
import { loadCurrencyRates } from './actions/';

import './styles/style.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, applyMiddleware(thunk));
store.dispatch(loadCurrencyRates());

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();