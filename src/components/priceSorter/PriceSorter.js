import React from 'react';
import './PriceSorter.css';

class PriceSorter extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      salons: []
    };
  }

  componentDidMount () {}

  render () {
    return (

      <span class='sorter'><div> <span>Pris</span>
      <select name='' id=''>
        <option name='100-250' value=''> 100-250 </option>
        <option name='250-400' value=''> 250-400 </option>
        <option name='400-600' value=''> 400-600 </option>
        <option name='600-800' value=''> 600-800 </option>
      </select> <span>kr</span> </div> <img src='img/tilde-down-gold.png' /></span>

    );
  }
}

export default PriceSorter;
