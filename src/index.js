import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

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

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
