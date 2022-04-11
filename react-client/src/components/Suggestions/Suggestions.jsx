import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

// Components
import RelatedItems from './RelatedItems.jsx';
import YourOutfit from './YourOutfit.jsx';
import Compare from './Compare.jsx';

// Secret Key
import secretKey from './config.js';

function Suggestions({ currentProduct }) {
  // Pass in props.currentProduct to use. Otherwise, will display random
  // product from tmestIDs
  const testIDs = [65665, 65692, 65858, 66077, 66114, 66148, 65778, 65917, 66021, 66326];
  const [currentProductID, setCurrentProductID] = useState(currentProduct
    || testIDs[Math.floor(Math.random() * testIDs.length)]);
  const [relatedProductIDs, setRelatedProductIDs] = useState([]);
  const [currentProductData, setCurrentProductData] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);
  const [comparedProduct, setComparedProduct] = useState(null);
  const [ratings, setRatings] = useState(null);
  const [favs, setFavs] = useState(localStorage.getItem('Your Outfit') !== null ? JSON.parse(localStorage.getItem('Your Outfit')) : []);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalXY, setModalXY] = useState([200, 200]);
  const [relPosn, setRelPosn] = useState(0);
  const [favPosn, setFavPosn] = useState(0);

  function getCurrentProductDataFromAPI() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${currentProductID}`, {
      headers: {
        authorization: secretKey,
      },
    })
      .then((res) => {
        setCurrentProductData(res.data);
      });
  }

  function getStylesDataFromAPI(productIdParam) {
    return new Promise((resolve) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productIdParam}/styles`, {
        headers: {
          authorization: secretKey,
        },
      })
        .then((results) => {
          resolve(results.data); // returns a Promise with the styles data for the given product id#
        });
    });
  }

  function getRelatedItemsDataFromAPI() {
    // This function populates the data for (1) relatedProductIDs, (2) related products,
    // (3) ratings state variables, and (4) related product styles
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${currentProductID}/related`, {
      headers: {
        authorization: secretKey,
      },
    })
      .then((res) => {
        const arrayOfRelatedProductIDs = res.data;

        // The following code saves the related items for the current product id
        // let relatedCache;
        // if (localStorage.getItem('relatedcache') === null) {
        //   relatedCache = [];
        // } else {
        //   relatedCache = JSON.parse(localStorage.getItem('relatedcache'));
        // }
        // if (relatedCache.filter(e => Object.keys(e)[0] == currentProductID).length === 0) {
        //   relatedCache.push({ [currentProductID]: res.data });
        //   localStorage.setItem('relatedcache', JSON.stringify(relatedCache));
        // }
        // console.log('Testing Related Cache');
        // console.log(relatedCache);

        // (1)
        setRelatedProductIDs(arrayOfRelatedProductIDs);
        // Get product information for the product IDs that are related to the current product
        Promise.all(arrayOfRelatedProductIDs.concat([currentProductID]).map((e) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${e}`, {
          headers: {
            authorization: secretKey,
          },
        })))
          .then((results) => {
            // (2) Set Related Products
            setRelatedProducts(results.map((e) => e.data));
          });
        // Get reviews for each Related Product
        // Run Promise.all to get all of the stars and #ratings info
        // Calculate the average of .results[i].rating for each related product
        Promise.all(arrayOfRelatedProductIDs.concat([currentProductID]).map((e) => axios.get('http://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/', {
          headers: {
            authorization: secretKey,
          },
          params: {
            product_id: e,
          },
        }))).then((results) => {
          const ratingsLookup = {};
          const resultsRestructured = results.map((e) => e.data);
          resultsRestructured.forEach((e) => {
            ratingsLookup[e.product] = {
              reviewsCount: e.results.length,
              averageScore: e.results.map((element) => element.rating)
                .reduce((a, b) => a + b) / e.results.length,
              results: e.results,
            };
          });
          // (3) Set Ratings state variable (which contains star rating information)
          setRatings(ratingsLookup);
        });
        // Get styles for each Related Product
        Promise.all(arrayOfRelatedProductIDs.map((e) => getStylesDataFromAPI(e)))
          .then((results) => {
            // (4) Set RelatedStyles variable (which contains an array of styles information
            // for each related product of current product)
            setRelatedStyles(results);
          });
      });
  }

  useEffect(() => {
    getCurrentProductDataFromAPI();
    getRelatedItemsDataFromAPI();
  }, [currentProductID]);

  // The following is some temporary styling. Replace later.
  const cardStyle = {
    display: 'inline-block',
    position: 'relative',
    top: '0px',
    width: '175px',
    height: '360px',
    margin: '5px',
    border: '2px lightgray solid',
    verticalAlign: 'text-top',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
  };

  const carouselStyle = {
    display: 'inline-block',
    position: 'relative',
    top: '0px',
    whiteSpace: 'nowrap',
    margin: '5px',

  };

  const imgStyle = {
    width: '175px',
  };

  const ulStyle = {
    listStyle: 'none',
  };

  const btnStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <RelatedItems
        carouselStyle={carouselStyle}
        relatedProducts={relatedProducts}
        cardStyle={cardStyle}
        ulStyle={ulStyle}
        ratings={ratings}
        imgStyle={imgStyle}
        currentProductData={currentProductData}
        btnStyle={btnStyle}
        setModalIsVisible={setModalIsVisible}
        currentProductID={currentProductID}
        setCurrentProductID={setCurrentProductID}
        setComparedProduct={setComparedProduct}
        setModalXY={setModalXY}
        relPosn={relPosn}
        setRelPosn={setRelPosn}
        relatedStyles={relatedStyles}
      />
      <YourOutfit
        carouselStyle={carouselStyle}
        cardStyle={cardStyle}
        currentProductID={currentProductID}
        ulStyle={ulStyle}
        imgStyle={imgStyle}
        ratings={ratings}
        favs={favs}
        setFavs={setFavs}
        currentProductData={currentProductData}
        btnStyle={btnStyle}
        favPosn={favPosn}
        setFavPosn={setFavPosn}
        getStylesDataFromAPI={getStylesDataFromAPI}
      />
      <Compare
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
        comparedProduct={comparedProduct}
        currentProductData={currentProductData}
        modalXY={modalXY}
      />
    </div>
  );
}

Suggestions.propTypes = {
  currentProduct: propTypes.number.isRequired,
};

export default Suggestions;
