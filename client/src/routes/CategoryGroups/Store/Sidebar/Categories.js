import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Link from '../../../../components/Link';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  a {
    margin-top: 13px;
  }
`;

const Categories = ({ categories, groupName }) => (
  <Wrapper>
    <h3>Categories</h3>
    <Link to={`/${groupName.toLowerCase()}/`}>All</Link>
    {categories.map(category => (
      <Link key={category._id} to={`/${groupName.toLowerCase()}/${category.name}`}>
        {category.name}
      </Link>
    ))}
  </Wrapper>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  groupName: PropTypes.string.isRequired,
};

export default Categories;
