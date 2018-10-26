import React from 'react';
import Container from '../../components/Container';

import Categories from './Categories';
import Featured from './Featured';

export default () => (
  <div>
    <Container>
      <Categories />
      <Featured />
    </Container>
  </div>
);
