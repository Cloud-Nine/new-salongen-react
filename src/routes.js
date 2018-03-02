import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import SalonsPage from './pages/salons/SalonsPage';
import SalonPage from './pages/salon/SalonPage';

export default (
<Router>
  <Route exact path='/start' component={App} />
  <Route path='/salonger' component={SalonsPage} />
  <Route path='salong/:id' component={SalonPage} />
</Router>

);
