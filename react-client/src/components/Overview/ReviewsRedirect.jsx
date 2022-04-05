import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

function ReviewsRedirect({ className, internalLink, numOfReviews }) {
  return (
    <a className={className} href={internalLink}>
      <p>
        {' '}
        Read all
        {' '}
        {numOfReviews}
        {' '}
        reviews
        {' '}
      </p>
    </a>
  );
}

ReviewsRedirect.propTypes = {
  className: propTypes.string.isRequired,
  internalLink: propTypes.string.isRequired,
  numOfReviews: propTypes.number.isRequired,
};

const StyledReviewsRedirect = styled(ReviewsRedirect)`
  color: var(--clr-black-cow);
`;

export default StyledReviewsRedirect;
