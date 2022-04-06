import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

function Selection({
  className, value, disabled,
}) {
  return <option disabled={disabled} className={className} value={value.toLowerCase().replace(' ', '-')}>{value}</option>;
}

Selection.propTypes = {
  className: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  disabled: propTypes.bool.isRequired,
};

const StyledSelection = styled(Selection)`
  display: block;
  ${({ hidden }) => (hidden ? 'display: none;' : '')}
  font-family: var(--fnt-regular);
`;

export default StyledSelection;
