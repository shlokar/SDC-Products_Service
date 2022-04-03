import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Components
import StyledStarsList from './StarsList.jsx';
import StyledReviewsRedirect from '../ReviewsRedirect.jsx';

function StarsListAndReviews({
  className, rating, internalLink, numOfReviews,
}) {
  return (
    <div className={className}>
      <StyledStarsList rating={rating} />
      <StyledReviewsRedirect internalLink={internalLink} numOfReviews={numOfReviews} />
    </div>
  );
}

const StyledStarsListAndReviews = styled(StarsListAndReviews)`
  display: inline-flex;
  align-items: center;
  height: 50px;
  gap: 10px;
`;

StarsListAndReviews.propTypes = {
  className: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  internalLink: propTypes.string.isRequired,
  numOfReviews: propTypes.number.isRequired,
};

export default StyledStarsListAndReviews;
