import React from 'react';
import axios from 'axios';
import './SalonsPage.css';
import PriceSorter from './../priceSorter/PriceSorter';

import { Link, Router, Route } from 'react-router-dom';

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
          <div class='block'>
            <img src='img/tilde-left-gold.png' alt='' />
            <h2>Hår</h2>
            <img src='img/controls.png' alt='' />
          </div>
          <div class='block'>
            <PriceSorter/>
          </div>
        </header>
        <section class='salons'>
          <ul>
            {this.state.salons.map(salon => <li>
                                              <a>
                                                <article>
                                                  <div class='left'>
                                                    <p>
                                                      {salon.opens} </p>
                                                  </div>
                                                  <div class='center'>
                                                    <h3>{salon.name}</h3> <span class='rating'>{/* <pm-star [rating]=salon?.rating></pm-star> */} (32)</span>
                                                    <p>
                                                      {salon.address} </p>
                                                  </div>
                                                  <div class='right'>
                                                    <div>
                                                      <p>
                                                        {salon.price} kr </p>
                                                      <h5>{salon.duration} min</h5> </div>
                                                  </div>
                                                  <div class='forward-button'> <img src='img/tilde-right-gold.png' alt='' /> </div>
                                                </article>
                                              </a>
                                            </li>)}
          </ul>
        </section>
      </div>

    );
  }
}

export default SalonsPage;
