import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

function Icon({ className, clickHandler }) {
  return (
    <svg
      onClick={() => clickHandler()}
      className={className}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <circle
        cx="12"
        cy="12"
        r="12"
      />
    </svg>
  );
}

const StyledIcon = styled(Icon)`
  display: flex;
  fill: #C4C4C4;
  ${({ selected }) => selected && 'fill: #4D4D4D;'}
  transition: all 1s;
  cursor: pointer;
`;

Icon.propTypes = {
  className: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
};

export default StyledIcon;
