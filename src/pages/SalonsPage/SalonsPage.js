import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Components
import PriceFilter from '../../components/PriceFilter/PriceFilter';
import StarRating from '../../components/StarRating/StarRating';

// Styling
import './salonsPage.css';

class SalonsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            salons: [],
            filteredSalons: [],
        };
        this.handleFilterChange  = this.handleFilterChange.bind(this);
    }

    handleFilterChange(filter) {
        const filteredSalons = this.state.salons.filter(salon => {
            return (salon.price <= filter.max && salon.price >= filter.min);
        });
        this.setState({filteredSalons})
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
                        <PriceFilter onChange={this.handleFilterChange}/>
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


SalonsPage.defaultProps = {
    history: {},
    location: {},
    match: {},
}

SalonsPage.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
}

export default SalonsPage;