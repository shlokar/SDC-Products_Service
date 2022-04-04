import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Components
import { StyledProductTitle, StyledProductCategory } from './Titles.jsx';

function ProductHeader({ className, title, category }) {
  return (
    <div className={className}>
      <StyledProductCategory title={category} />
      <StyledProductTitle title={title} />
    </div>
  );
}

const StyledProductHeader = styled(ProductHeader)`
  max-width: 400px;
`;

ProductHeader.propTypes = {
  className: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
};

export default StyledProductHeader;
