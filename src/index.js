import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
