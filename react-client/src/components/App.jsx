import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import axios from 'axios';

// Assets
import {
  getProdDataFromAPI, getProdStyleDataFromAPI, getReviewsDataFromAPI, getProdQsDataFromAPI
} from './apiFunctions';

// Components
import StyledOverview from './Overview/Overview';
import QAndAs from './QuestionsAndAnswers/QAndAs';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import Suggestions from './Suggestions/Suggestions';
import StyledNav from './ExtraComponents/Header/Heading';
import Banner from './ExtraComponents/Banner';

const getAllData = (productID) => {
  const prodDataPromise = getProdDataFromAPI(productID);
  const prodStyleDataPromise = getProdStyleDataFromAPI(productID);
  const prodReviewDataPromise = getReviewsDataFromAPI(productID);
  const prodQsDataPromise = getProdQsDataFromAPI(productID);
  return new Promise((resolve) => {
    axios.all([prodDataPromise, prodStyleDataPromise, prodReviewDataPromise, prodQsDataPromise])
      .then((results) => {
        resolve(results);
      });
  });
};

function App({ className }) {
  const [currProdId, setCurrProdId] = useState('65631');
  const [currProdData, setCurrProdData] = useState();
  const [currProdStyleData, setCurrProdStyleData] = useState();
  const [currProdReviewData, setCurrProdReviewData] = useState();
  const [currProdQsData, setCurrProdQsData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const updateAllData = (id) => {
    getAllData(id)
      .then((data) => {
        setCurrProdData(data[0]);
        setCurrProdStyleData(data[1]);
        setCurrProdReviewData(data[2]);
        setCurrProdQsData(data[3]);
      })
      .catch(() => {
        console.error('Something wrong with the call to updating all data.');
      });
  };

  // SETUP
  useEffect(() => {
    updateAllData(currProdId);
  }, []);

  // LOADING CHECK
  useEffect(() => {
    if (currProdData && currProdStyleData && currProdReviewData && currProdQsData) {
      setIsLoaded(true);
    }
  }, [currProdData, currProdStyleData, currProdReviewData, currProdQsData]);

  return (
    <div className={className}>
      {!isLoaded
        ? <div>LOADING...</div>
        : (
          <div>
            <StyledNav />
            <Banner />
            <StyledOverview
              prodData={currProdData}
              stylesData={currProdStyleData}
              reviewData={currProdReviewData}
            />
            <QAndAs prodName={currProdData.name} questionsData={currProdQsData} />
            <RatingsAndReviews />
            <Suggestions
              currProdId={currProdId}
              currProdData={currProdData}
              updateAllData={(id) => {
                updateAllData(id);
                setCurrProdId(id);
              }}
            />
          </div>
        )}
    </div>
  );
}

App.propTypes = {
  className: propTypes.string.isRequired,
};

const StyledApp = styled(App)`
  position: relative;
  max-width: 1400px;
  margin: auto;
`;

export default StyledApp;
