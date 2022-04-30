import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './redux'
import  { Router } from './components/routing/Router'
import './i18n' // this is necessary DO NOT DELETE

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router />
    </Provider>
  </React.StrictMode>, 
document.getElementById("root"))
