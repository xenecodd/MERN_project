import React from 'react'
import ReactDOM from 'react-dom';

import store from './redux/store'
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
      <App/>
  </Provider>,
)