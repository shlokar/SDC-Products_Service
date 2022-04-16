import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

// Components
import RelatedItems from './RelatedItems';
import YourOutfit from './YourOutfit';
import Compare from './Compare';

// Helper Functions (4):
// These helper functions take a product id (Number) and return a promise with data from the API
// endpoint in question ((1) product; (2) reviews; (3) styles; or (4) related-items).

// (1)
function getProductDataFromAPI(productIdParam) {
  return new Promise((resolve) => {
    const tempArray = localStorage.getItem('cachedProductData')
      ? JSON.parse(localStorage.getItem('cachedProductData')) : [];
    if (tempArray.filter((e) => e.id === productIdParam).length > 0) {
      resolve(tempArray.filter((e) => e.id === productIdParam)[0]);
    } else {
      axios.get(`/user/data-product?product_id=${productIdParam}`)
        .then((results) => {
          resolve(results.data);
          tempArray.push(results.data);
          localStorage.setItem('cachedProductData', JSON.stringify(tempArray));
        });
    }
  });
}

// (2)
function getReviewsDataFromAPI(productIdParam) {
  return new Promise((resolve) => {
    const tempArray = localStorage.getItem('cachedReviewsData')
      ? JSON.parse(localStorage.getItem('cachedReviewsData')) : [];
    if (tempArray.filter((e) => e.id === productIdParam).length > 0) {
      resolve(tempArray.filter((e) => e.id === productIdParam)[0]);
    } else {
      axios.get(`/user/data-reviews?product_id=${productIdParam}`).then((results) => {
        // Note: This helper function transforms the data
        const transformedResults = {
          id: Number(results.data.product),
          reviewsCount: results.data.results.length,
          averageScore: results.data.results.map((element) => element.rating)
            .reduce((a, b) => a + b) / results.data.results.length,
          results: results.data.results,
        };
        resolve(transformedResults);
        tempArray.push(transformedResults);
        localStorage.setItem('cachedReviewsData', JSON.stringify(tempArray));
      });
    }
  });
}

// (3)
function getStylesDataFromAPI(productIdParam) {
  return new Promise((resolve) => {
    const tempArray = localStorage.getItem('cachedStylesData')
      ? JSON.parse(localStorage.getItem('cachedStylesData')) : [];
    if (tempArray.filter((e) => e.id === productIdParam).length > 0) {
      resolve(tempArray.filter((e) => e.id === productIdParam)[0]);
    } else {
      axios.get(`/user/data-styles?product_id=${productIdParam}`)
        .then((results) => {
          resolve(results.data);
          tempArray.push(results.data);
          localStorage.setItem('cachedStylesData', JSON.stringify(tempArray));
        });
    }
  });
}

// (4)
function getRelatedItemsArrayFromAPI(productIdParam) {
  return new Promise((resolve) => {
    const tempArray = localStorage.getItem('cachedRelatedItemsArrays')
      ? JSON.parse(localStorage.getItem('cachedRelatedItemsArrays')) : [];
    if (tempArray.filter((e) => e.id === productIdParam).length > 0) {
      resolve(tempArray.filter((e) => e.id === productIdParam)[0]);
    } else {
      axios.get(`/user/related?product_id=${productIdParam}`)
        .then((results) => {
          resolve(results.data);
          tempArray.push(results.data);
          localStorage.setItem('cachedRelatedItemsArrays', JSON.stringify(tempArray));
        });
    }
  });
}

function Suggestions({ currProdId, currProdData, updateAllData }) {
  const dummyIDs = [65665, 65692, 65858, 66077, 66114, 66148, 65778, 65917, 66021, 66326];
  // Display a random product from dummyIDs if no product id is passed in
  const [currentProductID, setCurrentProductID] = useState(currProdId
    || dummyIDs[Math.floor(Math.random() * dummyIDs.length)]);
  // const [currentProductData, setCurrentProductData] = useState(currProdData);
  const [comparedProductData, setComparedProductData] = useState(null);
  const [relatedProductData, setRelatedProductData] = useState(null);
  const [relatedStylesData, setRelatedStylesData] = useState(null);
  const [relatedReviewsData, setRelatedReviewsData] = useState(null);
  const [favoriteProductData, setFavoriteProductData] = useState(localStorage.getItem('Your Outfit') !== null ? JSON.parse(localStorage.getItem('Your Outfit')) : []);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalXY, setModalXY] = useState([200, 200]);
  const [relPosn, setRelPosn] = useState(0);
  const [favPosn, setFavPosn] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  function fetchRelatedItemsDataFromAPI(productIdParam) {
    getRelatedItemsArrayFromAPI(productIdParam)
      .then((arrayOfRelatedProductIDs) => {
        axios.all(arrayOfRelatedProductIDs.map((e) => getProductDataFromAPI(e)))
          .then((res) => {
            setRelatedProductData(res);
          });
        axios.all(arrayOfRelatedProductIDs.map((e) => getReviewsDataFromAPI(e)))
          .then((res) => {
            setRelatedReviewsData(res);
          });
        axios.all(arrayOfRelatedProductIDs.map((e) => getStylesDataFromAPI(e)))
          .then((res) => {
            setRelatedStylesData(res);
          });
      });
  }

  useEffect(() => {
    fetchRelatedItemsDataFromAPI(currProdId);
  }, [currProdId]);

  // LOADING CHECK
  useEffect(() => {
    if (relatedProductData && relatedReviewsData && relatedStylesData && favoriteProductData && !isLoaded) {
      setIsLoaded(true);
    }
  }, [relatedProductData, relatedReviewsData, relatedStylesData, favoriteProductData]);

  return (
    <div>
      {!isLoaded
        ? <div>Loading</div>
        : (
          <div>
            <RelatedItems
              relatedProductData={relatedProductData}
              relatedReviewsData={relatedReviewsData}
              currentProductData={currProdData}
              setModalIsVisible={setModalIsVisible}
              currentProductID={currProdId}
              setCurrentProductID={updateAllData}
              setComparedProductData={setComparedProductData}
              setModalXY={setModalXY}
              relPosn={relPosn}
              setRelPosn={setRelPosn}
              relatedStylesData={relatedStylesData}
            />
            <YourOutfit
              currentProductID={currProdId}
              relatedReviewsData={relatedReviewsData}
              favoriteProductData={favoriteProductData}
              setFavoriteProductData={setFavoriteProductData}
              currentProductData={currProdData}
              setCurrentProductID={updateAllData}
              favPosn={favPosn}
              setFavPosn={setFavPosn}
              setRelPosn={setRelPosn}
              getStylesDataFromAPI={getStylesDataFromAPI}
              getReviewsDataFromAPI={getReviewsDataFromAPI}
            />
            <Compare
              modalIsVisible={modalIsVisible}
              setModalIsVisible={setModalIsVisible}
              comparedProductData={comparedProductData}
              currentProductData={currProdData}
              modalXY={modalXY}
            />
          </div>
        )}
    </div>
  );
}

Suggestions.propTypes = {
  currentProduct: propTypes.number,
};

export default Suggestions;
