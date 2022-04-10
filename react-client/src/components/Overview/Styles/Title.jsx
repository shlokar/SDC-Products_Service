import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const BoldText = styled.span`
  font-family: var(--fnt-dark);
`;

function TitleContainer({ className, styleName }) {
  return (
    <div className={className}>
      <p>
        <BoldText>Style &gt;</BoldText>
        {' '}
        {styleName}
      </p>
    </div>
  );
}

const StyledTitleContainer = styled(TitleContainer)`
  display: flex;
  font-size: 1.2rem;
  font-family: var(--fnt-light);
  text-transform: uppercase;
`;

TitleContainer.propTypes = {
  className: propTypes.string.isRequired,
  styleName: propTypes.string.isRequired,
};

export default StyledTitleContainer;
