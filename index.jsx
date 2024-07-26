import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import App from './App';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import reportwebvitals from './reportWebVitals'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <Provider store={ store }>
        <App/>
    </Provider>

);


























