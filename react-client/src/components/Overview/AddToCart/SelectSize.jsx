import React, { useState } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import propTypes from 'prop-types';
import dropDownSrc from './drop-down-arrow-icon.svg';
import dropDownDarkSrc from './drop-down-arrow-light-icon.svg';

// Components
import StyledSelection from './Selection.jsx';

function SelectionContainer({
  className, selections, name, inStock, clickHandler,
}) {
  const [selected, setSelected] = useState('');

  return (
    <select
      className={className}
      id={name}
      disabled={!inStock}
      value={selected}
      onChange={(e) => {
        clickHandler(e.target.value);
        setSelected(e.target.value);
      }}
    >
      {!inStock && <StyledSelection text="Out of Stock" disabled={false} />}

      {inStock && <StyledSelection text="Select Size" disabled={false} hidden />}
      {inStock && selections.map((item) => {
        const isOutOfStock = item.stock === 0;
        return (
          <StyledSelection
            key={uniqid()}
            value={item.id}
            text={item.value}
            disabled={isOutOfStock}
            hidden={isOutOfStock}
          />
        );
      })}
    </select>
  );
}

const StyledSelectionContainer = styled(SelectionContainer)`
  display: flex;
  font-family: var(--fnt-bold);
  font-size: 1.2rem;
  height: 65px;
  width: 100%;
  padding: 0 10px;
  text-transform: uppercase;
  appearance: none;
  background: url("${dropDownSrc}");
  ${({ inStock }) => (!inStock ? `background: url("${dropDownDarkSrc}");` : '')}
  background-repeat: no-repeat;
  background-position: calc(100% - 10px);
  overflow: hidden;
  background-size: 15px 15px;
  cursor: pointer;
`;

SelectionContainer.propTypes = {
  className: propTypes.string.isRequired,
  selections: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    stock: propTypes.number.isRequired,
  })).isRequired,
  name: propTypes.string.isRequired,
  inStock: propTypes.bool.isRequired,
  clickHandler: propTypes.func.isRequired,
};

/**
 * Properties
 *
 * selections: (array)
 *   - An array of objects with the following properties needed per object.
 *     - id: (string) - a unique identifier.
 *     - value: (string) - the option that you want to appear in drop down (s, m, l, etc.).
 *     - stock: (number) - the amount of items in stock for the current value.
 */

function SelectSize({ className, selections, selectHandler }) {
  const inStock = selections.some((item) => item.stock > 0);

  return (
    <label className={className} htmlFor="size-selection">
      <StyledSelectionContainer selections={selections} name="size-selection" inStock={inStock} clickHandler={selectHandler} />
    </label>
  );
}

SelectSize.propTypes = {
  className: propTypes.string.isRequired,
  selections: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    stock: propTypes.number.isRequired,
  })).isRequired,
  selectHandler: propTypes.func.isRequired,
};

const StyledSelectSize = styled(SelectSize)`
  width: 220px;  // remove this at some point
  flex-grow: 1;
`;

export default StyledSelectSize;
