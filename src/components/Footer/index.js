import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 45px;
  background-color: #f0f0f0;
  display: grid;
  grid-template-columns: 3fr repeat(3, 1fr) 2fr;
  gap: 30px;

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;

export default () => {
  return (
    <Footer>
      <div>
        <h3>GET IN TOUCH</h3>
        <p>
          Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or
          call us on (+1) 96 716 6879
        </p>
      </div>
      <div>
        <h3>CATEGORIES</h3>
        <ul>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>LINKS</h3>
        <ul>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>HELP</h3>
        <ul>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>NEWSLETTER</h3>
      </div>
    </Footer>
  );
};
