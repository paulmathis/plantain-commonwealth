import React from 'react';
import styled, { css } from 'styled-components/macro';
import { desktop, phone } from '../../util/mediaQueries';
import Link from '../Link';
import LinkList from './LinkList';

const Footer = styled.footer`
  padding: 45px;
  background-color: #f0f0f0;
  display: grid;
  grid-template-columns: 3fr repeat(3, 1fr) 2fr;
  gap: 30px;

  h4 {
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  p {
    line-height: 1.5;
  }
  a {
    line-height: 1.8;
  }

  p,
  a {
    font-size: 0.9em;
  }

  ${desktop(css`
    grid-template-columns: 1fr 1fr 1fr;

    .contact {
      grid-column: 1/-1;
    }
  `)};

  ${phone(css`
    grid-template-columns: 1fr;
  `)};
`;

export default () => (
  <Footer>
    <div className="contact">
      <h4>Get in touch</h4>
      <p>
        Any questions? Let us know in store at 5th floor, 379 Fake St, Austin, TX 78382 or call us
        on (+1) 512 555 5555
      </p>
    </div>
    <LinkList>
      <h4>Categories</h4>
      <Link to="/">Men</Link>
      <Link to="/">Women</Link>
      <Link to="/">Shoes</Link>
      <Link to="/">Bags</Link>
    </LinkList>
    <LinkList>
      <h4>Links</h4>
      <Link to="/">Search</Link>
      <Link to="/">About Us</Link>
      <Link to="/">Contact Us</Link>
      <Link to="/">Returns</Link>
    </LinkList>
    <LinkList>
      <h4>Help</h4>
      <Link to="/">Track Order</Link>
      <Link to="/">Returns</Link>
      <Link to="/">Shipping</Link>
      <Link to="/">FAQs</Link>
    </LinkList>
    <div className="newsletter">
      <h4>Newsletter</h4>
    </div>
  </Footer>
);
