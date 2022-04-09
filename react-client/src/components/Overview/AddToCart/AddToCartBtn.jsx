import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import plusSignSrc from './plus-sign-icon.svg';

function AddToCartBtn({ className, actionHandler }) {
  return <button className={className} type="submit" onClick={(e) => actionHandler(e)}>Add to Cart</button>;
}

AddToCartBtn.propTypes = {
  className: propTypes.string.isRequired,
  actionHandler: propTypes.func.isRequired,
};

const StyledAddToCartBtn = styled(AddToCartBtn)`
  ${({ hasStylesInStock }) => !hasStylesInStock && 'display: none;'}
  font-family: var(--fnt-bold);
  font-size: 1.2rem;
  text-transform: uppercase;
  height: 65px;
  width: 300px;
  background-image: url("${plusSignSrc}");
  background-repeat: no-repeat;
  background-position: calc(100% - 10px);
  background-size: 15px;
  background-color: var(--clr-white);
  border: 1px solid var(--clr-light-grey);
  text-align: left;
  padding: 0 10px;
  cursor: pointer;
  flex-grow: 1;
`;

export default StyledAddToCartBtn;
