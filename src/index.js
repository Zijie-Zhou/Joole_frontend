import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './Reducer/user';
import { themeSlice } from './Reducer/theme';
import {PersistGate} from 'redux-persist/integration/react';
import store,{persistor} from'./store';


ReactDOM.render(

  <React.StrictMode>

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App/>
      </PersistGate> 
    </Provider>
    
  </React.StrictMode>,
    

  document.getElementById("root")
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
