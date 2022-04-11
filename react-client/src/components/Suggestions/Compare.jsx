import React, { useState } from 'react';
import propTypes from 'prop-types';

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
    border: '2px gray solid',
    backgroundColor: 'white',

    position: 'absolute',
    top: `${modalXY[1]}px`,
    left: `${modalXY[0]}px`,
    alignItems: 'center',
    textAlign: 'center',
    zIndex: '150',
  };

  function createDataTable(featuresArrayA, featuresArrayB) {
    const table = {};
    featuresArrayA.forEach((e) => {
      if (table[e.feature] === undefined) table[e.feature] = {};
      table[e.feature].a = e.value ? e.value.slice(1, e.value.length - 1) : 'Yes';
    });
    featuresArrayB.forEach((e) => {
      if (table[e.feature] === undefined) table[e.feature] = {};
      table[e.feature].b = e.value ? e.value.slice(1, e.value.length - 1) : 'Yes';
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
              <th> </th>
              <th>{comparedProduct ? comparedProduct.name : 'Compared Product'}</th>
            </tr>
          </thead>
          <tbody>
            {currentProductData !== null
            && comparedProduct !== null
            && createDataTable(currentProductData.features, comparedProduct.features)
              .map((e) => <tr style={trStyle}>
                <td>{e[Object.keys(e)[0]].a ? (e[Object.keys(e)[0]].a === 'Yes' ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg> : e[Object.keys(e)[0]].a ) : ''}</td>
                <td>{Object.keys(e)[0]}</td>
                <td>{e[Object.keys(e)[0]].b ? (e[Object.keys(e)[0]].b === 'Yes' ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg> : e[Object.keys(e)[0]].b ) : ''}</td>
              </tr>)
            }

          </tbody>
        </table>

      </div>
    </div>
  );
}

Compare.propTypes = {
  modalIsVisible: propTypes.bool.isRequired,
  setModalIsVisible: propTypes.func.isRequired,
  comparedProduct: propTypes.object.isRequired,
  currentProductData: propTypes.object.isRequired,
  modalXY: propTypes.array.isRequired,
};

export default Compare;
