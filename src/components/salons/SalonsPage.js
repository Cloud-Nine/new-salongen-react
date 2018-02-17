import React from 'react';
import axios from 'axios';
import './SalonsPage.css';
import PriceSorter from './../priceSorter/PriceSorter';
import StarRating from './../starRating/StarRating';
import {Link, Router, Route} from 'react-router-dom';

class SalonsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      salons: []
    };
  }
  sortList = (dataFromChild) => {
    //  console.log(dataFromChild)  let filtered = this.salons.filter(salon =>
    // (salon.price <= max && salon.price >= min) )  this.setState({value:
    // event.target.value});

  }

  componentDidMount() {
    axios
      .get(`http://localhost:3456/salons`)
      .then(res => {
        const salons = res.data.salons;
        console.log(salons);
        this.setState({salons});
      });
  }

  render() {
    return (

      <div>
        <header>
          <div className='block'>
            <img src='img/tilde-left-gold.png' alt=''/>
            <h2>Hår</h2>
            <img src='img/controls.png' alt=''/>
          </div>
          <div className='block'>
            <PriceSorter getPriceFromChild={this.sortList}/>
          </div>
        </header>
        <section className='salons'>
          <ul>
            {this
              .state
              .salons
              .map(salon => <li>
                <a>
                  <article>
                    <div className='left'>
                      <p>
                        {salon.opens}
                      </p>
                    </div>
                    <div className='center'>
                      <h3>{salon.name}</h3>
                      <StarRating rating={salon.rating}/>
                      <span className='rating'>
                        ({salon.nrOfRatings})</span>
                      <p>
                        {salon.address}
                      </p>
                    </div>
                    <div className='right'>
                      <div>
                        <p>
                          {salon.price}
                          kr
                        </p>
                        <h5>{salon.duration}
                          min</h5>
                      </div>
                    </div>
                    <div className='forward-button'>
                      <img src='img/tilde-right-gold.png' alt=''/>
                    </div>
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
