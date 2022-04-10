import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Bold = styled.span`
  font-family: var(--fnt-bold);
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const Italic = styled.span`
font-family: var(--fnt-light-italic);
`;

function Banner({ className }) {
  return (
    <div className={className}>
      <p>
        <Italic>Site-Wide Announcement Message!</Italic>
        {' '}
        - Sale / Discount
        {' '}
        <Bold>Offer</Bold>
        {' '}
        -
        {' '}
        <Underline>New Product Highlight</Underline>
      </p>
    </div>
  );
}

const StyledBanner = styled(Banner)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--fnt-light);
  text-transform: uppercase;
  font-size: 1rem;
  height: 50px;
  width: 100%;
`;

Banner.propTypes = {
  className: propTypes.string.isRequired,
};

export default StyledBanner;
