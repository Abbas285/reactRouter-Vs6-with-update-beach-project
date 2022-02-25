import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import {RoomProvider} from './context'
ReactDOM.render(
  <RoomProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </RoomProvider>
  ,
  document.getElementById('root')
);


