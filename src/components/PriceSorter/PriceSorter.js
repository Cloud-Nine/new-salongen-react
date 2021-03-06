import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styling
import './priceSorter.css';

class PriceSorter extends Component {

  constructor (props) {
    super(props);

    this.state = {
      showHideSorter: 'hidden',
      upOrDown: 'down',
      collapsedOrexpanded: 'collapsed',
      currentPrice: `Pris 250 - 500 kr`
    };
  }

  toggleDropdown () {
    var hideOrShow = (this.state.showHideSorter === 'hidden') ? 'show' : 'hidden';
    var upOrDown = (this.state.upOrDown === 'down') ? 'up' : 'down';
    var collapsedOrexpanded = (this.state.collapsedOrexpandedv === 'expanded') ? 'collapsed' : 'expanded';
    this.setState({'showHideSorter': hideOrShow});
    this.setState({'upOrDown': upOrDown});
    this.setState({'collapsedOrexpanded': collapsedOrexpanded});
  }

  selectPriceRange (event) {
    let values = {};
    if (event.target.dataset.all) {
      values = {
        all: true
      };
      this.setState({'currentPrice': `Alla priser`});
    }else {
      values = {
        min: event.target.dataset.min,
        max: event.target.dataset.max
      };
      this.setState({'currentPrice': `Pris ${values.min} - ${values.max} kr`});
    }
    this.props.getPriceFromChild(values);
  }

  render () {
    return (
      <div onClick={this.toggleDropdown.bind(this)} className='sorter'>
        <p>
          {this.state.currentPrice}
        </p>
        <img className={this.state.upOrDown} src='./img/tilde-down-gold.png' alt='' />
        <div className={this.state.showHideSorter}>
          <ul>
            <li onClick={this.selectPriceRange.bind(this)} data-all='100'>
              Alla priser
            </li>
            <li onClick={this.selectPriceRange.bind(this)} data-min='100' data-max='250'>
              100 - 250 kr
            </li>
            <li onClick={this.selectPriceRange.bind(this)} data-min='250' data-max='400'>
              250 - 400 kr
            </li>
            <li onClick={this.selectPriceRange.bind(this)} data-min='400' data-max='600'>
              400 - 600 kr
            </li>
            <li onClick={this.selectPriceRange.bind(this)} data-min='600' data-max='800'>
              600 - 800 kr
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

PriceSorter.defaultProps = {
  getPriceFromChild: () => {}
}

PriceSorter.propTypes = {
  getPriceFromChild: PropTypes.func
}

export default PriceSorter;
