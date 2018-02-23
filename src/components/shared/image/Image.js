import React from 'react';

class Image extends React.Component {

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
        <img className={this.props.cssClass} src={this.props.url} alt={this.state.altText}/>
    );
  }
}

export default Image;
