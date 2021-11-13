import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/Context'
import firebase from './firebase/cofig'
ReactDOM.render(
  <FirebaseContext.Provider value={{firebase}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

