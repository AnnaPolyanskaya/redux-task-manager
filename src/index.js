/* React */
import React from 'react';
import ReactDOM from 'react-dom';
/* Redux */
import {Provider} from 'react-redux';
import store from './store';


/* Components */
import App from './App';
import * as serviceWorker from './serviceWorker';






ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();