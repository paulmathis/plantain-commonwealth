import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../../components/Hero';
import Store from './Store';

const Base = ({ name, tag, hero, _id }) => (
  <React.Fragment>
    <Hero small src={hero}>
      <h1>{name}</h1>
      <h2>{tag}</h2>
    </Hero>
    <Store group={_id} />
  </React.Fragment>
);

Base.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  hero: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

export default Base;
