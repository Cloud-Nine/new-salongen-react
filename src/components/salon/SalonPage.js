import React from 'react';
import './SalonPage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StarRating from './../starRating/StarRating';

class SalonPage extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      name: props.match.params.name,
      id: props.match.params.id,
      salon: {}
    };
  }
  componentDidMount () {
    axios.get(`http://esfb.nu/salonapi/salons?id=${this.state.id}`)
      .then(res => {
        this.setState({
          salon: res.data[0]
        }
        );
      }
    );
  }
  render () {
    return (
      <main className='salon-page'>
        <header  style={{backgroundImage: `url('${this.state.salon.thumbnail}')`}}>
          <Link to={`/salonger`}>
          <img className="back-button" src='/img/tilde-left.png' alt='tilde-left' />
          </Link>
          <div>
            <h2 className='serif'>{this.state.salon.name}</h2>
            {this.state.salon.rating && <span><StarRating rating= {this.state.salon.rating} /> <p> ({this.state.salon.nrOfRatings}) </p></span>}
          </div>
          <img className='heart' src='/img/heart.png' alt='heart' />
        </header>
        <nav>
          <div className='active'>
            <a>Info</a>
          </div>
          <div>
            <a>Schema</a>
          </div>
        </nav>
        <section>
          <div className='inner-wrapper'>
            <ul>
              <li>
                <img src='/img/location.png' alt='location' /> <span>{this.state.salon.address} , {this.state.salon.postalCode} {this.state.salon.city}</span>
              </li>
              <li>
                <img src='/img/clock.png' alt='clock' />Öppet till {this.state.salon.closes} idag <img className='tilde-down' src='/img/tilde-down.png' alt='tilde-down' />
              </li>
              <li>
                <img src='/img/telephone.png' alt='clock' />
                {this.state.salon.telephone}
              </li>
              <li>
                <Link to={`/this.state.salon.externalUrl`}>
                <img src='/img/url.png' alt='clock' />
                {this.state.salon.url}
                </Link>
              </li>
            </ul>
            <div className='description'>
              <p>
                {this.state.salon.desciption}
              </p>
            </div>
          </div>
        </section>
      </main>);
  }
}

export default SalonPage;
