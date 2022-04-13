import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Components
import StyledOverview from './Overview/Overview';
import QAndAs from './QuestionsAndAnswers/QAndAs';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import Suggestions from './Suggestions/Suggestions';
import StyledNav from './ExtraComponents/Header/Heading';
import Banner from './ExtraComponents/Banner';

function App({ className }) {
  return (
    <div className={className}>
      <StyledNav />
      <Banner />
      <StyledOverview />
      <QAndAs />
      <RatingsAndReviews />
      <Suggestions />
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
