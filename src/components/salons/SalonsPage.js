import React from 'react';
import axios from 'axios';
import './SalonsPage.css';

import { Link, Router } from 'react-router-dom';

class SalonsPage extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      salons: []
    };
  }

  componentDidMount () {
    axios.get(`http://localhost:3456/salons`)
      .then(res => {
        const salons = res.data.salons;
        console.log(salons);
        this.setState({ salons});
      });
  }

  render () {
    return (

      <div>
        <header>
          <div>
            <Router>
              <Link to={`/`} activeClassName='active'>
              <img src='assets/img/tilde-left-gold.png' alt='' />
              </Link>
            </Router>
            <h2>Hår</h2>
            <img src='assets/img/controls.png' alt='' />
          </div>
          <div>
            {/* <app-price-sorter (newPriceRange)=sortList($event)></app-price-sorter> */}
          </div>
        </header>
        <section class='salons'>
          <ul>
            <li>
              <a>
                <article>
                  <div class='left'>
                    <p> 12.00 </p>
                  </div>
                  <div class='center'>
                    <h3>Hårgänget</h3> <span class='rating'>{/* <pm-star [rating]=salon?.rating></pm-star> */} (32)</span>
                    <p> Främlingsvägen </p>
                  </div>
                  <div class='right'>
                    <div>
                      <p> 100 kr </p>
                      <h5>30 min</h5> </div>
                  </div>
                  <div class='forward-button'> <img src='assets/img/tilde-right-gold.png' alt='' /> </div>
                </article>
              </a>
            </li>
          </ul>
          {/* <app-error-message *ngIf="errorMessage"></app-error-message> */}
        </section>
      </div>
      // <ul>
      //   {this.state.salons.map(salon => <li>
      //                                     {salon.name}
      //                                   </li>)}
      // </ul>

    );
  }
}

export default SalonsPage;
