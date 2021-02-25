import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import Firebase, { FirebaseContext } from './components/FireBase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <FirebaseContext.Consumer>
      {firebase => <App firebase={firebase}/> }
    </FirebaseContext.Consumer>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
