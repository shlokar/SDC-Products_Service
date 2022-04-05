import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

function ProductOverview({ className, text }) {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
}

const StyledProductOverview = styled(ProductOverview)`
  font-family: var(--fnt-regular);
  width: 500px;
  line-height: 1.5;
`;

ProductOverview.propTypes = {
  className: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default StyledProductOverview;
