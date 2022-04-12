import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

// Components
import RelatedItems from './RelatedItems';
import YourOutfit from './YourOutfit';
import Compare from './Compare';

// Secret Key
import secretKey from './config';

// Helper Functions (4):
// These helper functions take a product id (Number) and return a promise with data from the API
// endpoint in question ((1) product; (2) reviews; (3) styles; or (4) related-items).

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
      // Note: This helper function transforms the data
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
        resolve(results.data);
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
    getRelatedItemsArrayFromAPI(productIdParam)
      .then((arrayOfRelatedProductIDs) => {
        Promise.all(arrayOfRelatedProductIDs.map((e) => getProductDataFromAPI(e)))
          .then((res) => {
            setRelatedProductData(res);
          });

        Promise.all(arrayOfRelatedProductIDs.map((e) => getReviewsDataFromAPI(e)))
          .then((res) => {
            setRelatedReviewsData(res);
          });
        Promise.all(arrayOfRelatedProductIDs.map((e) => getStylesDataFromAPI(e)))
          .then((res) => {
            setRelatedStylesData(res);
          });
      });
  }

  useEffect(() => {
    getProductDataFromAPI(currentProductID)
      .then((data) => setCurrentProductData(data));
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
  currentProduct: propTypes.number,
};

export default Suggestions;
