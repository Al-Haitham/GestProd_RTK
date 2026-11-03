import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {BrowserRouter} from 'react-router-dom';
import productReducer from './productSlice.js';
import App from './App.jsx';
import './index.css';

const store=configureStore({
  reducer:{
    products:productReducer
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);