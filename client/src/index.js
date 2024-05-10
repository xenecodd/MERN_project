import React from 'react'
import ReactDOM from 'react-dom';

import store from './redux/store'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element= {<Home />} />
        <Route path = "/auth" element= {<Auth />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
)