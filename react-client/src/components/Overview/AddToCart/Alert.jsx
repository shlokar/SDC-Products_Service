import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

function Alert({ className, text }) {
  return <p className={className}>{text}</p>;
}

Alert.propTypes = {
  className: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

const StyledAlert = styled(Alert)`
  display: none;
  ${(({ isVisible }) => isVisible && 'display: inline-block;')}
  font-family: var(--fnt-bold);
  color: red;
  margin: 10px 0;
`;

export default StyledAlert;
