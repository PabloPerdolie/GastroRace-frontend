import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/MainStyle.css"
import "./styles/Login.css"
import "./styles/Nav.css"
import "./styles/AdItemPage.css"
import "./styles/Cart.css"
import "./styles/Orders.css"

import App from './App';
import { Provider } from 'react-redux';
import store from './app_state/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

