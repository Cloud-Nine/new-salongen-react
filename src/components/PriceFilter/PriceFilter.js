import React from 'react';
import PropTypes from 'prop-types';
import './priceFilter.css';

class PriceFilter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isDropdownOpen: false,
            filters: [
                {
                    min: Number.MIN_SAFE_INTEGER,
                    max: Number.MAX_SAFE_INTEGER,
                    customLabel: 'Alla priser',
                    selected: true
                },
                {min: 100, max: 250},
                {min: 250, max: 400},
                {min: 400, max: 600},
                {min: 600, max: 800}
            ]
        };

        this.selectFilter = this.selectFilter.bind(this);
    }

    toggleDropdown() {
        const isDropdownOpen = !this.state.isDropdownOpen;
        this.setState(() => ({isDropdownOpen}));
    }

    selectFilter(selectedFilterIndex) {
        const filters = this.state.filters.map((filter, index) => ({
            ...filter,
            selected: selectedFilterIndex === index
        }));

        this.setState({filters});
        const selectedFilter = filters.find(filter => filter.selected);
        this.props.onChange(selectedFilter);
    }

    getLabel = (filter) => filter.customLabel || `${filter.min} - ${filter.max}kr`;

    render() {

        const selectedFilter = this.state.filters.find(filter => filter.selected);

        return (
            <div onClick={this.toggleDropdown.bind(this)} className='sorter'>
                <p>{this.getLabel(selectedFilter)}</p>
                <img className={this.state.isDropdownOpen ? 'up' : 'down'} src='./img/tilde-down-gold.png'
                     alt=''/>
                {this.state.isDropdownOpen && (
                    <div>
                        <ul>
                            {this.state.filters.map((filter, index) => {
                                return (
                                    <li key={index}
                                        onClick={() => this.selectFilter(index)}
                                        data-min={filter.min} data-max={filter.max}>
                                        {this.getLabel(filter)}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

PriceFilter.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default PriceFilter;
