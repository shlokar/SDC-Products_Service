import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Components
import Overview from './Overview/Overview.jsx';
import QAndAs from './QuestionsAndAnswers/QAndAs.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import Suggestions from './Suggestions/Suggestions.jsx';
import StyledNav from './ExtraComponents/Header/Heading.jsx';
import Banner from './ExtraComponents/Banner.jsx';

function App({ className }) {
  return (
    <div className={className}>
      <StyledNav />
      <Banner />
      <Overview />
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
