import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Payslips from './routes/Payslips';
import PayslipDetails from './routes/PayslipDetails';
import { Provider } from 'react-redux';

import configureStore from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
