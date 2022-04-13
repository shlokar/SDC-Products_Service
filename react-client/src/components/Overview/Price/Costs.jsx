import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledCost = styled.p`
  display: inline-block;
`;

function DefaultCost({ className, cost }) {
  const styledCost = `$${cost}`;
  return (
    <StyledCost className={className}>
      {styledCost}
    </StyledCost>
  );
}

const StyledDefaultCost = styled(DefaultCost)`
  ${(props) => props.onSale && 'text-decoration: line-through;'}
`;

DefaultCost.propTypes = {
  className: propTypes.string.isRequired,
  cost: propTypes.string.isRequired,
};

function SaleCost({ className, cost }) {
  const styledCost = `$${cost}`;
  return (
    <StyledCost className={className}>
      {styledCost}
    </StyledCost>
  );
}

const StyledSaleCost = styled(SaleCost)`
  color: red;
`;

SaleCost.propTypes = {
  className: propTypes.string.isRequired,
  cost: propTypes.string.isRequired,
};

export { StyledDefaultCost, StyledSaleCost };
