import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {

  constructor (props) {
    super(props);
    this.state ={
      altText: ''
    }
  }

  trimAltText(url){
    let start = url.slice(5)
    let end = start.slice(null,-4);
    this.setState({altText:end})
  }

  componentDidMount () {
    this.trimAltText(this.props.url)
  }

  render () {
    return (
        <img className={this.props.cssClass} style={{ backgroundImage: `url('${this.props.url}')` }} alt={this.state.altText}/>
    );
  }
}

Image.defaultProps = {
  cssClass: ''
};

Image.propTypes = {
  cssClass: PropTypes.string,
  url: PropTypes.string.isRequired
};

export default Image;
