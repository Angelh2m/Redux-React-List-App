import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles.css';
// Default Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Reducers
import rootReducer from './reducers';
// [ Import the actions ] for the reducer
// import {addCharacterById} from './actions';
// Create a store
const store = createStore(rootReducer);

// console.log("Store state: ", store.getState());
/**
 * Subscribing to the store makes it possible to
 * execute some code every time the state is updated.
 */
// store.subscribe(() => console.log("store", store.getState()));
// Activate dispatch and the subscribe will update the state
// store.dispatch( addCharacterById(1) )


ReactDOM.render(

  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root')

);
