import React, { Component } from 'react';
import Container from '../../components/Container';

import Categories from './Categories';
import Featured from './Featured';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Categories />
          <Featured />
        </Container>
      </div>
    );
  }
}
