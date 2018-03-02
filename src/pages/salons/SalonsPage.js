import React from 'react';
import axios from 'axios';
import './SalonsPage.css';
import PriceSorter from '../../components/PriceSorter/PriceSorter';
import StarRating from '../../components/StarRating/StarRating';
import {Link} from 'react-router-dom';

class SalonsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      salons: [],
      filteredSalons: [],
    };
  }
  sortList = (values) => {
    if(values.all === true){
      this.setState({filteredSalons:this.state.salons})
    }
    else{
      let filtered = this.state.salons.filter(salon =>
        (salon.price <= values.max && salon.price >= values.min ));
         this.setState({filteredSalons:filtered})
    }
  
  }
  

  componentDidMount() {
    axios
       .get(`http://esfb.nu/salonapi/salons`)
      .then(res => {
        const salons = res.data.salons;
        const filteredSalons = res.data.salons;
        this.setState({salons});
        this.setState({filteredSalons});
      });
  }

  render() {
    return (
      <div className="salons-page">
        <header>
          <div className='block'>
            <img src='img/tilde-left-gold.png' alt='tilde-left-gold'/>
            <h2 className="serif">Hår</h2>
            <img src='img/controls.png' alt='controls'/>
          </div>
          <div className='block'>
            <PriceSorter getPriceFromChild={this.sortList}/>
          </div>
        </header>
        <section className='salons'>
          <ul>
            {this.state.filteredSalons
              .map(salon => <li  key={salon.id}>
                <Link to={`/salong/${salon.name}/${salon.id}`}>
                  <article>
                    <div className='left'>
                      <p>
                        {salon.opens}
                      </p>
                    </div>
                    <div className='center'>
                      <h3 className="serif">{salon.name}</h3>
                      <div className="rating">
                      <StarRating rating={salon.rating}/>
                      <span><p className='grey-text small-text'>({salon.nrOfRatings})</p></span>
                      </div> 
                      <h4>
                        {salon.address}
                      </h4>
                    </div>
                    <div className='right'>
                      <div>
                        <p>
                          {salon.price} kr
                        </p>
                        <h5>{salon.duration} min</h5>
                      </div>
                    </div>
                    <div className='forward-button'>
                      <img src='img/tilde-right-gold.png' alt='tilde-right-gold'/>
                    </div>
                  </article>
                </Link>
              </li>)}
          </ul>
        </section>
      </div>
    );
  }
}

export default SalonsPage;
