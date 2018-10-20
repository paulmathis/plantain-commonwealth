import React from 'react';
import Grid from './Grid';
import Col from './Col';
import Category from './Category';

export default () => {
  return (
    <Grid>
      <Col>
        <Category />
        <Category />
      </Col>
      <Col>
        <Category />
        <Category />
      </Col>
      <Col>
        <Category />
        <Category />
      </Col>
    </Grid>
  );
};
