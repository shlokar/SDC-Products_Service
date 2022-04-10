import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { StyledDefaultCost, StyledSaleCost } from './Costs.jsx';

function Price({
  className, cost, onSale, saleCost,
}) {
  return (
    <div className={className}>
      {onSale && <StyledSaleCost cost={saleCost} />}
      <StyledDefaultCost cost={cost} onSale={onSale} />
    </div>
  );
}

const StyledPrice = styled(Price)`
  display: inline-flex;
  gap: 10px;
  font-size: 1.2rem;
`;

Price.defaultProps = {
  saleCost: 0,
};

Price.propTypes = {
  className: propTypes.string.isRequired,
  cost: propTypes.number.isRequired,
  onSale: propTypes.bool.isRequired,
  saleCost: propTypes.number,
};

export default StyledPrice;
