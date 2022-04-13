import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Components
import StyledStarsList from './StarsList.jsx';
import StyledReviewsRedirect from '../ReviewsRedirect.jsx';

function StarsAndReviews({
  className, rating, internalLink, numOfReviews,
}) {
  return (
    <div className={className}>
      <StyledStarsList rating={rating} />
      <StyledReviewsRedirect internalLink={internalLink} numOfReviews={numOfReviews} />
    </div>
  );
}

const StyledStarsAndReviews = styled(StarsAndReviews)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

StarsAndReviews.propTypes = {
  className: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  internalLink: propTypes.string.isRequired,
  numOfReviews: propTypes.number.isRequired,
};

export default StyledStarsAndReviews;
