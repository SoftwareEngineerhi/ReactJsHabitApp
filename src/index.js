import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

//creating the store
import store from './store/store';
// const store = createStore(habits);

// create root element of app and render it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

