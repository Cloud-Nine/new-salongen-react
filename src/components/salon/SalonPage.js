import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import './SalonPage.css';

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
        this.setState({ salons});
      });
  }

  render () {
    return (
      <ul>
        {this.state.salons.map(salon => <li key={salon.name}>
                                          {salon.name}
                                        </li>)}
      </ul>

    );
  }
}

export default SalonsPage;
