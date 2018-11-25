import React from 'react';
import Base from './Base';
import heroMen from '../../assets/heroes/hero-men.jpg';
import heroWomen from '../../assets/heroes/hero-women.jpg';
import heroShoes from '../../assets/heroes/hero-shoes.jpg';
import heroAccessories from '../../assets/heroes/hero-accessories.jpg';

/*
 * Injects props into base Category Group component and returns a function to recieve react router props.
 * Essentially this is the same as this directly in the router file
 * <Route exact path="/men" component={(props) => <Base {...groups.men} />} /> 
 */
function injectProps(myProps) {
  return routerProps => <Base {...routerProps} {...myProps} />;
}

const groups = {
  men: {
    name: 'Men',
    tag: 'New Arrivals Men Collection 2018',
    hero: heroMen,
  },
  women: {
    name: 'Women',
    tag: 'New Arrivals Women Collection 2018',
    hero: heroWomen,
  },
  shoes: {
    name: 'Shoes',
    tag: 'New Arrivals Shoes Collection 2018',
    hero: heroShoes,
  },
  accessories: {
    name: 'Accessories',
    tag: 'New Arrivals Accessories Collection 2018',
    hero: heroAccessories,
  },
};

export const Men = injectProps(groups.men);
export const Women = injectProps(groups.women);
export const Shoes = injectProps(groups.shoes);
export const Accessories = injectProps(groups.accessories);
