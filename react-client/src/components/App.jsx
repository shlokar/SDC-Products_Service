import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Assets
import getAllUserData from './serverFunctions';

// Components
import StyledOverview from './Overview/Overview';
import QAndAs from './Q&A/QuestionsAnswers';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import Suggestions from './Suggestions/Suggestions';
import StyledNav from './ExtraComponents/Header/Heading';
import Banner from './ExtraComponents/Banner';

const StyledDivider = styled.div`
  height: 250px;
`;

function App({ className }) {
  const [currProdId, setCurrProdId] = useState('65631');
  const [currProdData, setCurrProdData] = useState();
  const [currProdStyleData, setCurrProdStyleData] = useState();
  const [currProdReviewData, setCurrProdReviewData] = useState();
  const [currProdQsData, setCurrProdQsData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const updateAllData = (id) => {
    getAllUserData(id)
      .then((data) => {
        const dataArr = data.data;
        setCurrProdData(dataArr[0]);
        setCurrProdStyleData(dataArr[1]);
        setCurrProdReviewData(dataArr[2]);
        setCurrProdQsData(dataArr[3]);
      })
      .catch((err) => {
        console.error(`Something wrong with the call to updating all data: ${err}`);
      });
  };

  // SETUP
  useEffect(() => {
    updateAllData(currProdId);
  }, []);

  // LOADING CHECK
  useEffect(() => {
    if (currProdData && currProdStyleData && currProdReviewData && currProdQsData && !isLoaded) {
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
            <StyledDivider />
            <QAndAs prodName={currProdData.name} questionsData={currProdQsData} />
            <StyledDivider />
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
