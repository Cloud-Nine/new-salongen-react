import React from 'react';
import './PriceSorter.css';

class PriceSorter extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      salons: []
    };
  }


change = (event) => {
  console.log(event.target)
  console.log(event.target.value)
  this.props.getPriceFromChild(event.target.value);

}

  render () {

    
    return (
      <span className='sorter'><div><span>Pris</span>
      <select onChange={this.change} value={this.state.value}>
        <option  data-min="100" data-max="250">100-250</option>
        <option  data-min="250" data-max="400">250-400</option>
        <option  data-min="400" data-max="600">400-600</option>
        <option  data-min="600" data-max="800">600-800</option>
      </select> <span>kr</span> </div> <img src='img/tilde-down-gold.png' /></span>

    );
  }
}

export default PriceSorter;
