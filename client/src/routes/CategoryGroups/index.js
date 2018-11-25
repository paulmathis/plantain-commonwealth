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
    _id: '5be4fca8ee7c6435e011df2e',
    name: 'Men',
    tag: 'New Arrivals Men Collection 2018',
    hero: heroMen,
  },
  women: {
    _id: '5be4fd24f5719f39bce77265',
    name: 'Women',
    tag: 'New Arrivals Women Collection 2018',
    hero: heroWomen,
  },
  shoes: {
    _id: '5be71fdd012c8510b0adf52d',
    name: 'Shoes',
    tag: 'New Arrivals Shoes Collection 2018',
    hero: heroShoes,
  },
  accessories: {
    _id: '5be723a8bc201d29bcbe8977',
    name: 'Accessories',
    tag: 'New Arrivals Accessories Collection 2018',
    hero: heroAccessories,
  },
};

export const Men = injectProps(groups.men);
export const Women = injectProps(groups.women);
export const Shoes = injectProps(groups.shoes);
export const Accessories = injectProps(groups.accessories);
