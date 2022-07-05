import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './Reducers/index';
import '../src/sass/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <App />
  </Provider>

);

