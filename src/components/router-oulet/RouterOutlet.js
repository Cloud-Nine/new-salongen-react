
import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom'
import SalonsPage from './../salons/SalonsPage';
import SalonPage from './../salon/SalonPage';

class RouterOutlet extends Component {
  render () {
    return (
    <Switch>
      <Route  path='/salonger' component={SalonsPage}/>
      <Route  path='/salong/:name' component={SalonPage}/>
    </Switch>
    );
  }
}

export default RouterOutlet;
