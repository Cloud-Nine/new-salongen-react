import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SalonsPage from '../../pages/SalonsPage/SalonsPage';
import SalonPage from '../../pages/SalonPage/SalonPage';
import PresentationPage from '../../pages/PresentationPage/PresentationPage';

class RouterOutlet extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={PresentationPage} />
        <Route path='/salonger' component={SalonsPage} />
        <Route path='/salong/:name/:id' component={SalonPage} />
      </Switch>
    );
  }
}

export default RouterOutlet;
