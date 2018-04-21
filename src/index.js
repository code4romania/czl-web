import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import { App } from './app';
import registerServiceWorker from './registerServiceWorker';
import { categorySelection } from './category-selection';
import { categories } from './categories';

import './index.css';


console.log(categorySelection);
const rootReducer = combineReducers({
  categorySelection,
  categories
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
