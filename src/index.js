import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ClothesContexProvider} from './contex/ClothesContex'

ReactDOM.render(
  <React.StrictMode>
   <ClothesContexProvider> <App /></ClothesContexProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

