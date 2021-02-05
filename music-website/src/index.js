import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./stylesheets/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import 'mdbreact/dist/css/mdb.css';
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import Store from "./Store";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
