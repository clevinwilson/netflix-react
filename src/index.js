import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/Context'
import firebase from './firebase/cofig'
import Context from './store/Context'
ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

