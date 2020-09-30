import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import reducer from './reducers';
import middleware from './middleware';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer, middleware);

ReactDOM.render(
	<Provider store={store} e>
		<App />
	</Provider>,
	document.getElementById('root')
);
