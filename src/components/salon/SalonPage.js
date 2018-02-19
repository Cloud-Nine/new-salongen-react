import React from 'react';
import axios from 'axios';
import './SalonPage.css';

class SalonPage extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      salon: props.match.params.name
    };
  }

  componentDidMount () {
    axios.get(`http://localhost:3456/salons/${this.state.salon}`)
      .then(res => {
        const salons = res.data.salons;
        this.setState({ salons});
      });
  }

  render () {
    return (
   
      
      <h1>heelo</h1>

    );
  }
}

export default SalonPage;
