import React from 'react';
import styled, { css } from 'styled-components/macro';
import Container from '../../../components/Container';
import Products from './Products';

import Sidebar from './Sidebar';
import { phone } from '../../../util/mediaQueries';

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 2fr) minmax(auto, 7fr);
  grid-gap: 30px;

  ${phone(css`
    grid-template-columns: 1fr;
  `)};
`;

export default () => (
  <Container>
    <Grid>
      <Sidebar />
      <Products />
    </Grid>
  </Container>
);
