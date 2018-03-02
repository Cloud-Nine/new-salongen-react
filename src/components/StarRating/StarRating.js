import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Styling
import './starRating.css';

// Assets
import emptyStar from './star.png';
import filledStar from './star-filled.png';

class StarRating extends PureComponent {
    render() {
        const {rating} = this.props;
        return (
            <span className={'stars'}>
                {new Array(5).fill()
                    .map((_, index) => (
                        <img key={index} src={index < rating ? filledStar : emptyStar} alt='star'/>
                    ))}
            </span>
        )
    }
}

StarRating.defaultProps = {
  rating: 0
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired
}

export default StarRating;
