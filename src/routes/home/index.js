import React, { Component } from 'react';
import Container from '../../components/Container';

import Categories from './Categories.js';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Categories />
        </Container>
      </div>
    );
  }
}
