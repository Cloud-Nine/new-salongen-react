import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router-dom';
// import routes from './routes'
import './index.css';
import App from './App';
import Salons from './components/salons/SalonsPage';
import Salon from './components/salon/SalonPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
