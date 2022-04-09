import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

function Selection({
  className, value, text, disabled, clickHandler,
}) {
  return (
    <option
      onChange={clickHandler}
      disabled={disabled}
      className={className}
      value={value}
    >
      {text}
    </option>
  );
}

Selection.defaultProps = {
  clickHandler: () => console.log('this is a default'),
};

Selection.defaultProps = {
  value: '',
};

Selection.propTypes = {
  className: propTypes.string.isRequired,
  value: propTypes.string,
  text: propTypes.string.isRequired,
  disabled: propTypes.bool.isRequired,
  clickHandler: propTypes.func,
};

const StyledSelection = styled(Selection)`
  display: block;
  ${({ hidden }) => (hidden ? 'display: none;' : '')}
  font-family: var(--fnt-regular);
`;

export default StyledSelection;
