import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import '../src/sass/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import store from './Store/store';






const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store} >
      <App />
  </Provider>

);

