import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

function DefaultCost({ className, cost }) {
  const styledCost = `$${cost}`;
  return (
    <p className={className}>
      {styledCost}
    </p>
  );
}

const StyledDefaultCost = styled(DefaultCost)`
  display: inline-block;
  font-size: 1.3rem;
  ${(props) => props.onSale && 'text-decoration: line-through;'}
`;

DefaultCost.propTypes = {
  className: propTypes.string.isRequired,
  cost: propTypes.number.isRequired,
};

function SaleCost({ className, cost }) {
  const styledCost = `$${cost}`;
  return (
    <div className={className}>
      {styledCost}
    </div>
  );
}

const StyledSaleCost = styled(SaleCost)`
  display: inline-block;
  font-size: 1.3rem;
  color: red;
`;

SaleCost.propTypes = {
  className: propTypes.string.isRequired,
  cost: propTypes.number.isRequired,
};

export { StyledDefaultCost, StyledSaleCost };
