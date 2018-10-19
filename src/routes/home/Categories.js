import React from 'react';
import styled from 'styled-components';
import shirt from '../../assets/shirt.jpg';

const Grid = styled.div`
  height: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  & > div {
    height: 800px;
    display: grid;
    grid-gap: 30px;

    & > div {
      overflow: hidden;
      position: relative;
    }
  }

  & > div:nth-child(odd) {
    grid-template-rows: 3fr 2fr;
  }

  & > div:nth-child(even) {
    grid-template-rows: 2fr 3fr;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
    position: absolute;
  }

  img:hover {
    transform: scale(1.05);
  }

  button {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    color: #333;
    border: none;
    width: 179px;
    height: 46px;
    font-size: 1.5em;
    font-weight: 100;
  }

  button:hover {
    color: white;
    background-color: orange;
  }
`;

export default () => {
  return (
    <Grid>
      <div>
        <div>
          <img src={shirt} />
          <button>Shirts</button>
        </div>
        <div>
          <img src={shirt} />
          <button>Shirts</button>
        </div>
      </div>
      <div>
        <div>
          <img src={shirt} />
          <button>Shirts</button>
        </div>
        <div>
          <img src={shirt} />
          <button>Shirts</button>
        </div>
      </div>
      <div>
        <div>
          <img src={shirt} />
          <button>Shirts</button>
        </div>
        <div>
          <img src={shirt} />
          <button>Shirts</button>
        </div>
      </div>
    </Grid>
  );
};
