import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

function ProductCategory({ className, title }) {
  return <h2 className={className}>{title}</h2>;
}

const StyledProductCategory = styled(ProductCategory)`
  font-family: var(--fnt-regular);
  font-size: 1.3rem;
  text-transform: uppercase;
`;

ProductCategory.propTypes = {
  className: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

function ProductTitle({ className, title }) {
  return <h1 className={className}>{title}</h1>;
}

const StyledProductTitle = styled(ProductTitle)`
  font-family: var(--fnt-bold);
  font-size: 2.5rem;
`;

ProductTitle.propTypes = {
  className: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export { StyledProductCategory, StyledProductTitle };
