import React, { useState } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import propTypes from 'prop-types';
import dropDownSrc from './drop-down-arrow-icon.svg';
import dropDownDarkSrc from './drop-down-arrow-light-icon.svg';

// Components
import StyledSelection from './Selection.jsx';

function SelectionContainer({
  className, qtyArr, id, inStock, clickHandler,
}) {
  const [selected, setSelected] = useState('');

  return (
    <select
      className={className}
      id={id}
      disabled={!inStock}
      value={selected}
      onChange={(e) => {
        setSelected(e.target.value);
        clickHandler(e.target.value);
      }}
    >
      {qtyArr.length === 0
      && <StyledSelection key={uniqid()} text=" - " disabled={false} hidden={false} />}
      {qtyArr.length > 0
      && qtyArr.map((strNum) => (
        <StyledSelection
          key={uniqid()}
          text={strNum}
          value={strNum}
          disabled={false}
          hidden={false}
        />
      )) }
    </select>
  );
}

const StyledSelectionContainer = styled(SelectionContainer)`
  display: flex;
  font-family: var(--fnt-bold);
  font-size: 1.2rem;
  display: block;
  height: 65px;
  min-width: 150px;
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
  qtyArr: propTypes.arrayOf(propTypes.string).isRequired,
  id: propTypes.string.isRequired,
  inStock: propTypes.bool.isRequired,
  clickHandler: propTypes.func.isRequired,
};

/**
 * Properties
 *
 * qty: (integer)
 *   - a integer value that specifies the qty of the product that's available.
 *   - a decimal value is not allowed.
 *
 *  Note: When a value greater then 15 is input, a value up to 15 is shown.
 *  this is done by design per the Business requirements.
 */

function QtySelector({ qty, clickHandler }) {
  const qtyArr = [];
  let newQty = qty;
  if (newQty > 15) {
    newQty = 15;
  }

  if (newQty !== undefined) {
    for (let i = 0; i < newQty; i++) {
      qtyArr.push(String(i + 1));
    }
  }

  return (
    <label htmlFor="qty-selection">
      <StyledSelectionContainer qtyArr={qtyArr} id="qty-selection" inStock={newQty > 0} clickHandler={clickHandler} />
    </label>
  );
}

QtySelector.propTypes = {
  qty: propTypes.number.isRequired,
  clickHandler: propTypes.func.isRequired,
};

export default QtySelector;
