import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// milyen komponens, elementet, bármilyen html elementet szeretnénk ki renderelni
// function tick() {
//   const element = (<div>
//     {new Date().toLocaleTimeString()}
//   </div>)
  
//   // elementet amit létrehoztam egy element alá rendereli
//   ReactDOM.render(element, document.getElementById('root'))
// }

// // szeretném ha többször is meghívódna
// setInterval(() => tick(), 1000)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
