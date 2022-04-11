import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

// Components
import RelatedItems from './RelatedItems.jsx';
import YourOutfit from './YourOutfit.jsx';
import Compare from './Compare.jsx';

// Secret Key
import secretKey from './config.js';

// Helper Functions (3):
// These helper functions take a product id (Number) and return a promise with data from the API
// endpoint in question (product, reviews, or styles).

// (1)
function getProductDataFromAPI(productIdParam) {
  return new Promise((resolve) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productIdParam}`, {
      headers: {
        authorization: secretKey,
      },
    })
      .then((results) => {
        resolve(results.data);
      });
  });
}

// (2)
function getReviewsDataFromAPI(productIdParam) {
  return new Promise((resolve) => {
    axios.get('http://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/', {
      headers: {
        authorization: secretKey,
      },
      params: {
        product_id: productIdParam,
      },
    }).then((results) => {
      const ratingsLookup = {
        id: Number(results.data.product),
        reviewsCount: results.data.results.length,
        averageScore: results.data.results.map((element) => element.rating)
          .reduce((a, b) => a + b) / results.data.results.length,
        results: results.data.results,
      };
      resolve(ratingsLookup);
    });
  });
}

// (3)
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

// (4)
function getRelatedItemsArrayFromAPI(productIdParam) {
  return new Promise((resolve) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productIdParam}/related`, {
      headers: {
        authorization: secretKey,
      },
    })
      .then((results) => {
        resolve(results.data);
      });
  });
}

function Suggestions({ currentProduct }) {
  const dummyIDs = [65665, 65692, 65858, 66077, 66114, 66148, 65778, 65917, 66021, 66326];
  // Display a random product from dummyIDs if no product id is passed in
  const [currentProductID, setCurrentProductID] = useState(currentProduct
    || dummyIDs[Math.floor(Math.random() * dummyIDs.length)]);
  const [currentProductData, setCurrentProductData] = useState(null);
  const [comparedProductData, setComparedProductData] = useState(null);
  const [relatedProductData, setRelatedProductData] = useState([]);
  const [relatedStylesData, setRelatedStylesData] = useState([]);
  const [relatedReviewsData, setRelatedReviewsData] = useState(null);
  const [favoriteProductData, setFavoriteProductData] = useState(localStorage.getItem('Your Outfit') !== null ? JSON.parse(localStorage.getItem('Your Outfit')) : []);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalXY, setModalXY] = useState([200, 200]);
  const [relPosn, setRelPosn] = useState(0);
  const [favPosn, setFavPosn] = useState(0);

  function fetchRelatedItemsDataFromAPI(productIdParam) {
    // This function gets a list of product IDs related to the passed in product ID which should be
    // the current product ID and populates the data for (1) related products product information,
    // (2) related product reviews, and (3) related product styles
    getRelatedItemsArrayFromAPI(productIdParam)
      .then((results) => {
        const arrayOfRelatedProductIDs = results;

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

        // Get product information for the product IDs that are related to the current product
        Promise.all(arrayOfRelatedProductIDs.map((e) => getProductDataFromAPI(e)))
          .then((results) => {
            // (1) Set Related Products
            setRelatedProductData(results);
          });
        // Get reviews for each Related Product
        // Run Promise.all to get all of the stars and #ratings info
        // Calculate the average of .results[i].rating for each related product
        Promise.all(arrayOfRelatedProductIDs.map((e) => getReviewsDataFromAPI(e)))
          .then((results) => {
            // (2) Set Ratings state variable (which contains star rating information)
            setRelatedReviewsData(results);
          });
        // Get styles for each Related Product
        Promise.all(arrayOfRelatedProductIDs.map((e) => getStylesDataFromAPI(e)))
          .then((results) => {
            // (3) Set RelatedStyles variable (which contains an array of styles information
            // for each related product of current product)
            setRelatedStylesData(results);
          });
      });
  }

  useEffect(() => {
    // if currentProductID changes, make an HTTP request to get new data for currentProductData
    getProductDataFromAPI(currentProductID)
      .then((data) => setCurrentProductData(data));
    // if currentProductID changes, make an HTTP request to get product data for related items
    fetchRelatedItemsDataFromAPI(currentProductID);
  }, [currentProductID]);

  return (
    <div>
      <RelatedItems
        relatedProductData={relatedProductData}
        relatedReviewsData={relatedReviewsData}
        currentProductData={currentProductData}
        setModalIsVisible={setModalIsVisible}
        currentProductID={currentProductID}
        setCurrentProductID={setCurrentProductID}
        setComparedProductData={setComparedProductData}
        setModalXY={setModalXY}
        relPosn={relPosn}
        setRelPosn={setRelPosn}
        relatedStylesData={relatedStylesData}
      />
      <YourOutfit
        currentProductID={currentProductID}
        relatedReviewsData={relatedReviewsData}
        favoriteProductData={favoriteProductData}
        setFavoriteProductData={setFavoriteProductData}
        currentProductData={currentProductData}
        favPosn={favPosn}
        setFavPosn={setFavPosn}
        getStylesDataFromAPI={getStylesDataFromAPI}
        getReviewsDataFromAPI={getReviewsDataFromAPI}
      />
      <Compare
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
        comparedProductData={comparedProductData}
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
