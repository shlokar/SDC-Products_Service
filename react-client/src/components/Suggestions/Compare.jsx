import React, { useState } from 'react';

function Compare({
  modalIsVisible,
  setModalIsVisible,
  comparedProduct,
  currentProductData,
  modalXY,
}) {
  const modalWrapper = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    visibility: modalIsVisible ? 'visible' : 'hidden',
  };

  const compareModal = {
    padding: '10px',
    border: '1px gray solid',
    backgroundColor: 'white',
    borderRadius: '7px',
    position: 'absolute',
    top: `${modalXY[1]}px`,
    left: `${modalXY[0]}px`,
    alignItems: 'center',
    textAlign: 'center',
  };

  function createDataTable(featuresArrayA, featuresArrayB) {
    const table = {};
    featuresArrayA.forEach((e) => {
      if (table[e.feature] === undefined) table[e.feature] = {};
      table[e.feature].a = e.value || 'Yes';
    });
    featuresArrayB.forEach((e) => {
      if (table[e.feature] === undefined) table[e.feature] = {};
      table[e.feature].b = e.value || 'Yes';
    });
    const array = [];
    for (const key in table) {
      const object = {};
      object[key] = table[key];
      array.push(object);
    }
    return array;
  }

  const trStyle = {
    borderBottom: '1px dotted gray',
    borderTop: '1px dotted gray',
  };

  return (
    <div style={modalWrapper} onClick={()=>setModalIsVisible(false)}>
      <div style={compareModal}>
        <span>COMPARING</span>
        <table>
          <thead>
            <tr style={trStyle}>
              <th>{currentProductData ? currentProductData.name : 'Current Product'}</th>
              <th />
              <th>{comparedProduct ? comparedProduct.name : 'Compared Product'}</th>
            </tr>
          </thead>
          <tbody>
            {currentProductData !== null
            && comparedProduct !== null
            && createDataTable(currentProductData.features, comparedProduct.features)
              .map((e) => <tr style={trStyle}>
                <td>{e[Object.keys(e)[0]].a || ''}</td>
                <td>{Object.keys(e)[0]}</td>
                <td>{e[Object.keys(e)[0]].b || ''}</td>
              </tr>)
            }

          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Compare;
