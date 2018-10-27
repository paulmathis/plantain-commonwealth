import React from 'react';
import styled from 'styled-components/macro';
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
`;

export default () => (
  <Footer>
    <div>
      <h4>Get in touch</h4>
      <p>
        Any questions? Let us know in store at 5th floor, 379 Fake St, Austin, TX 78382 or call us
        on (+1) 512 555 5555
      </p>
    </div>
    <LinkList>
      <h4>Categories</h4>
      <Link href="/">Men</Link>
      <Link href="/">Women</Link>
      <Link href="/">Shoes</Link>
      <Link href="/">Bags</Link>
    </LinkList>
    <LinkList>
      <h4>Links</h4>
      <Link href="/">Search</Link>
      <Link href="/">About Us</Link>
      <Link href="/">Contact Us</Link>
      <Link href="/">Returns</Link>
    </LinkList>
    <LinkList>
      <h4>Help</h4>
      <Link href="/">Track Order</Link>
      <Link href="/">Returns</Link>
      <Link href="/">Shipping</Link>
      <Link href="/">FAQs</Link>
    </LinkList>
    <div>
      <h4>Newsletter</h4>
    </div>
  </Footer>
);
