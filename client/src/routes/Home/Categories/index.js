import React from 'react';
import Grid from './Grid';
import Col from './Col';
import Category from './Category';
import shirt from '../../../assets/shirt.jpg';
import shoes from '../../../assets/shoes.jpg';
import jacket from '../../../assets/jacket.jpg';
import dress from '../../../assets/dress.jpg';
import watches from '../../../assets/watches.jpg';
import bag from '../../../assets/bag.jpg';

export default () => (
  <Grid>
    <Col>
      <Category img={shirt} name="Shirts" />
      <Category img={shoes} name="Shoes" />
    </Col>
    <Col>
      <Category img={watches} name="Watches" />
      <Category img={dress} name="Dresses" />
    </Col>
    <Col>
      <Category img={jacket} name="Jackets" />
      <Category img={bag} name="Bags" />
    </Col>
  </Grid>
);
