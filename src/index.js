import React from 'react';
import  ReactDOM  from 'react-dom';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Provider} from 'react-redux'
import {store} from './Redux/store/index'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
   </React.StrictMode>,
   document.getElementById('root')
)
