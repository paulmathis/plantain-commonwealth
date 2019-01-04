import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Button from '../../../../components/Button';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceRange: [0, 200],
      search: '',
    };

    this.onSliderChange = this.onSliderChange.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSliderChange(value) {
    this.setState({
      priceRange: value,
    });
  }

  onSearchChange(e) {
    this.setState({
      search: e.target.value,
    });
  }

  onSubmit(e) {
    const { onSearchChange } = this.props;
    const { search } = this.state;

    if (e.key === 'Enter') {
      onSearchChange(search);
    }
  }

  render() {
    const { priceRange, search } = this.state;
    const { onSliderChange } = this.props;
    return (
      <Wrapper>
        <h3>Filters</h3>
        <hr />
        Price
        <RangeSlider
          allowCross={false}
          defaultValue={[0, 200]}
          onChange={this.onSliderChange}
          onAfterChange={onSliderChange}
          min={0}
          max={200}
        />
        <div className="filter-range">
          <Button dark round small>
            Filter
          </Button>
          Range: ${priceRange[0]} - ${priceRange[1]}
        </div>
        <hr />
        <input
          onKeyPress={this.onSubmit}
          onChange={this.onSearchChange}
          value={search}
          placeholder="Search Products..."
        />
      </Wrapper>
    );
  }
}

Filters.propTypes = {
  onSliderChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Filters;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  hr {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .filter-range {
    display: flex;
    justify-content: space-between;
  }

  input {
    padding: 20px;
    border: 1px solid #e6e6e6;
    color: ${({ theme }) => theme.grey};
  }
`;

const RangeSlider = styled(Range)`
  margin-top: 20px;
  margin-bottom: 20px;
`;
