import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Button from '../../../../components/Button';

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

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceRange: [0, 200],
    };

    this.onSliderChange = this.onSliderChange.bind(this);
  }

  onSliderChange(value) {
    this.setState({
      priceRange: value,
    });
  }

  render() {
    const { priceRange } = this.state;
    return (
      <Wrapper>
        <h3>Filters</h3>
        <hr />
        Price
        <RangeSlider
          allowCross={false}
          defaultValue={[0, 200]}
          onChange={this.onSliderChange}
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
        <input placeholder="Search Products..." />
      </Wrapper>
    );
  }
}