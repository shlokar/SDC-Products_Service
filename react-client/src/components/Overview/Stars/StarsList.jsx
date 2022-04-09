import React from 'react';
import propTypes from 'prop-types';
import uniqid from 'uniqid';
import styled from 'styled-components';

// Components
import Star from './Star.jsx';

const createRatingsArr = (rating) => {
  const ratingsArr = [];
  let value = rating * 10;

  for (let i = 0; i < 5; i++) {
    if (value === 0) {
      ratingsArr.push(String(0).concat('%'));
    } else if (value < 10) {
      value = (value / 10) * 100;
      ratingsArr.push(String(value).concat('%'));
      value = 0;
    } else if (value >= 10) {
      value -= 10;
      ratingsArr.push(String(100).concat('%'));
    }
  }

  return ratingsArr;
};

function StarsList({ className, rating }) {
  const ratingsArr = createRatingsArr(rating);
  return (
    <ul className={className}>
      {ratingsArr.map((score) => <Star key={uniqid()} fillPercent={score} />)}
    </ul>
  );
}

StarsList.propTypes = {
  className: propTypes.string.isRequired,
  rating: propTypes.number.isRequired, // integer between 0 and 5.
};

const StyledStarsList = styled(StarsList)`
  display: inline-block;
`;

export default StyledStarsList;
