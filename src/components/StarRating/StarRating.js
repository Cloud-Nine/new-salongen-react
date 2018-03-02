import React, {PureComponent} from 'react';
import './starRating.css';
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

export default StarRating;
