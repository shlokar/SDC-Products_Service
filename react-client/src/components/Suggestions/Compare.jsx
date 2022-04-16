import React from 'react';
import propTypes from 'prop-types';

// Assets
import checkMarkSrc from './iconmonstr-check-mark-1.svg';

function Compare({
  comparedProductData,
  currentProductData,
  modalXY,
  modalIsVisible,
  setModalIsVisible,
}) {
  const modalWrapper = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
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
      table[e.feature].a = e.value ? e.value : 'Yes';
    });
    featuresArrayB.forEach((e) => {
      if (table[e.feature] === undefined) table[e.feature] = {};
      table[e.feature].b = e.value ? e.value : 'Yes';
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
    <div style={modalWrapper} onClick={() => setModalIsVisible(false)}>
      <div style={compareModal}>
        <span>COMPARING</span>
        <table>
          <thead>
            <tr style={trStyle}>
              <th>{currentProductData ? currentProductData.name : 'Current Product'}</th>
              <th> </th>
              <th>{comparedProductData ? comparedProductData.name : 'Compared Product'}</th>
            </tr>
          </thead>
          <tbody>
            {currentProductData !== null
            && comparedProductData !== null
            && createDataTable(currentProductData.features, comparedProductData.features)
              .map((e, i) => (
                <tr key={`feature-${i}-tr`} style={trStyle}>
                  <td key={`feature-${i}-td1`}>{e[Object.keys(e)[0]].a ? (e[Object.keys(e)[0]].a === 'Yes' ? <img key={`feature-${i}-td1-img`} src={checkMarkSrc} /> : e[Object.keys(e)[0]].a ) : ''}</td>
                  <td key={`feature-${i}-td2`}>{Object.keys(e)[0]}</td>
                  <td key={`feature-${i}-td3`}>{e[Object.keys(e)[0]].b ? (e[Object.keys(e)[0]].b === 'Yes' ? <img key={`feature-${i}-td3-img`} src={checkMarkSrc} /> : e[Object.keys(e)[0]].b ) : ''}</td>
                </tr>
              ))}

          </tbody>
        </table>

      </div>
    </div>
  );
}

Compare.propTypes = {
  modalIsVisible: propTypes.bool.isRequired,
  setModalIsVisible: propTypes.func.isRequired,
  comparedProductData: propTypes.object,
  currentProductData: propTypes.object,
  modalXY: propTypes.arrayOf(propTypes.number).isRequired,
};

export default Compare;
