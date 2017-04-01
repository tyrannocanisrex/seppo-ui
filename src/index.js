import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import './index.css';
import { createStore } from 'redux';
import seppoWizard from './reducers/reducers';
import { Provider } from 'react-redux';

let store = createStore(seppoWizard);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
