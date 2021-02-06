import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import App from './App';
import './stylesheets/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import registerServiceWorker from './registerServiceWorker';
import Store from './Store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <SnackbarProvider maxSnack={3} style={{ backgroundColor: '#dc005d', maxWidth: '220px' }}>
        <App />
      </SnackbarProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
