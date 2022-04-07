import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Assets
import facebookSrc from './icons/facebook-icon.svg';
import pinterestSrc from './icons/pinterest-icon.svg';
import twitterSrc from './icons/twitter-icon.svg';

// Components
import StyledSocialBtn from './SocialBtn.jsx';

/**
 *
 * Properties
 *
 * facebook, twitter, pinterest: (string)
 *   - Each of these props is a redirect to share the product on a respective location.
 *
 */

function SocialBtns({
  className, facebook, twitter, pinterest,
}) {
  return (
    <div className={className}>
      <StyledSocialBtn src={facebookSrc} alt="Facebook icon" redirect={facebook} />
      <StyledSocialBtn src={twitterSrc} alt="Twitter icon" redirect={twitter} />
      <StyledSocialBtn src={pinterestSrc} alt="Pinterest icon" redirect={pinterest} />
    </div>
  );
}

const StyledSocialBtns = styled(SocialBtns)`
  display: inline-flex;
  gap: 20px;
  padding: 25px 0;
`;

SocialBtns.propTypes = {
  className: propTypes.string.isRequired,
  facebook: propTypes.string.isRequired,
  twitter: propTypes.string.isRequired,
  pinterest: propTypes.string.isRequired,
};

export default StyledSocialBtns;
