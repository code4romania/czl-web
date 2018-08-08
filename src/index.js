import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { App } from './app';
import { I18nProvider } from './app/i18n';
import registerServiceWorker from './registerServiceWorker';

// Import module reducers
import { i18n } from './app/i18n';
import { categorySelection } from './category-selection';
import { categories } from './categories';

const rootReducer = combineReducers({
  i18n,
  categorySelection,
  categories
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <I18nProvider>
      <App />
    </I18nProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
