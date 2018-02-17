import React from 'react';
import './StarRating.css';

class StarRating extends React.Component {

  constructor (props) {
    super(props);
    this.unFilled = 'img/star.png';
    this.state = {
      rating: props.rating,
      stars: [{url: this.unFilled}, {url: this.unFilled}, {url: this.unFilled}, {url: this.unFilled}, {url: this.unFilled}]
    };
    for (let i = 0; i < this.state.rating; i++) {
      this.state.stars[i].url = 'img/star-filled.png';
    }
  }

  componentDidMount () {}

  render () {
    return (
      <span className='stars'><img src={this.state.stars[0].url}/> <img src={this.state.stars[1].url}/> <img src={this.state.stars[2].url}/> <img src={this.state.stars[3].url}/> <img src={this.state.stars[4].url}/></span>
    );
  }
}

export default StarRating;
