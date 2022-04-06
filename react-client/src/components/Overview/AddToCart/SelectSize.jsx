import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import propTypes from 'prop-types';
import dropDownIconSrc from './drop-down-arrow-icon.svg';

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
  ${({ hidden }) => (hidden ? 'display: none;' : '')}
  font-family: var(--fnt-regular);
`;

function SelectSize({ className, selections }) {
  return (
    <label htmlFor="size-selection">
      <select className={className} name="size-select" id="size-selection">
        <StyledSelection value="Select Size" disabled={false} hidden />
        {selections.map((item) => {
          const isOutOfStock = item.stock === 0;
          return (
            <StyledSelection
              key={uniqid()}
              value={item.value}
              disabled={isOutOfStock}
              hidden={isOutOfStock}
            />
          );
        })}
      </select>
    </label>
  );
}

const StyledSelectSize = styled(SelectSize)`
  display: flex;
  font-family: var(--fnt-bold);
  font-size: 1.2rem;
  display: block;
  height: 65px;
  min-width: 300px;  // remove this at some point
  padding: 0 10px;
  text-transform: uppercase;
  appearance: none;
  background: url("${dropDownIconSrc}");
  background-repeat: no-repeat;
  background-position: calc(100% - 10px);
  overflow: hidden;
  background-size: 15px 15px;
  cursor: pointer;
`;

SelectSize.propTypes = {
  className: propTypes.string.isRequired,
  selections: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    stock: propTypes.number.isRequired,
  })).isRequired,
};

export default StyledSelectSize;
