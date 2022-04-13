import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Components
import StyledSelectSize from './SelectSize.jsx';
import QtySelector from './QtySelector.jsx';
import StyledAddToCartBtn from './AddToCartBtn.jsx';
import StyledAlert from './Alert.jsx';

function AddToCartContainer({ className, items }) {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [userSelection, setUserSelection] = useState({ size: '', qty: '0' });
  const [alertVisible, setAlertVisible] = useState(false);
  const hasStylesInStock = items.some((item) => item.stock > 0);

  useEffect(() => {
    setSelectedItem(items[0]);
    setUserSelection({ size: '', qty: '0' });
    setAlertVisible(false);
  }, [items]);

  const updateSelectedItem = (id) => {
    if (selectedItem.id !== id) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          setSelectedItem(items[i]);
          break;
        }
      }
    }
  };

  const changeUserSize = (size) => {
    const newUserSelection = { ...userSelection };
    newUserSelection.size = size;
    newUserSelection.qty = String(1);
    setUserSelection(newUserSelection);
  };

  const changeUserQty = (qty) => {
    const newUserSelection = { ...userSelection };
    newUserSelection.qty = qty;
    setUserSelection(newUserSelection);
  };

  const getSize = (id) => {
    const { value } = items.filter((item) => item.id === id)[0];
    return value;
  };

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  return (
    <div>
      <StyledAlert text="Please select size." isVisible={alertVisible} />
      <div className={className}>
        <StyledSelectSize
          selections={items}
          selectHandler={(e) => {
            if (alertVisible) {
              hideAlert(false);
            }
            changeUserSize(getSize(e.target.value));
            updateSelectedItem(e.target.value);
          }}
        />
        <QtySelector
          qty={selectedItem.stock}
          clickHandler={changeUserQty}
          userQty={userSelection.qty}
        />
        <StyledAddToCartBtn
          hasStylesInStock={hasStylesInStock}
          actionHandler={() => {
            const { size, qty } = userSelection;

            if (size.length > 0 && Number(qty) > 0) {
              console.log('Ready to submit! Here is the data: ', userSelection);
            } else {
              showAlert();
            }
          }}
        />
      </div>
    </div>
  );
}

AddToCartContainer.propTypes = {
  className: propTypes.string.isRequired,
  items: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    value: propTypes.string.isRequired, // The size of the product (large, medium, etc.)
    stock: propTypes.number.isRequired, // the amount of the product in stock.
  })).isRequired,
};

const StyledAddToCartContainer = styled(AddToCartContainer)`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 450px;
`;

export default StyledAddToCartContainer;
