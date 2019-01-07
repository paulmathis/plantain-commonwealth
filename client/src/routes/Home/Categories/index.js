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
      <Category to="/men/t-shirts" img={shirt} name="Shirts" />
      <Category to="/shoes" img={shoes} name="Shoes" />
    </Col>
    <Col>
      <Category to="/accessories/watches" img={watches} name="Watches" />
      <Category to="/women/dresses" img={dress} name="Dresses" />
    </Col>
    <Col>
      <Category to="/men/jackets" img={jacket} name="Jackets" />
      <Category to="/accessories/bags" img={bag} name="Bags" />
    </Col>
  </Grid>
);
