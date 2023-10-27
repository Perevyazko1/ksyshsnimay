import React from 'react';
import ReactDOM from 'react-dom/client';
import "./app/style/index.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./app/store/store";
import 'react-loading-skeleton/dist/skeleton.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = setupStore()
root.render(
    <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
    </Provider>

);

reportWebVitals();
