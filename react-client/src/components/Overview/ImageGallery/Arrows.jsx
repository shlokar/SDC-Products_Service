import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Assets
import upArrowSrc from './up-arrow-icon.svg';
import downArrowSrc from './down-arrow-icon.svg';

function UpArrow({ className, clickHandler }) {
  return (
    <input type="image" src={upArrowSrc} alt="scroll-up-button" className={className} onClick={() => clickHandler()} />
  );
}

const StyledUpArrow = styled(UpArrow)`
  cursor: pointer;
  margin: 20px 0;
  ${({ visible }) => !visible && 'visibility: hidden;'}
`;

UpArrow.propTypes = {
  className: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
};

function DownArrow({ className, clickHandler }) {
  return (
    <input type="image" src={downArrowSrc} alt="scroll-down-button" className={className} onClick={() => clickHandler()} />
  );
}

const StyledDownArrow = styled(DownArrow)`
  cursor: pointer;
  margin: 20px 0;
  ${({ visible }) => !visible && 'visibility: hidden;'}
`;

DownArrow.propTypes = {
  className: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
};

export { StyledUpArrow, StyledDownArrow };
