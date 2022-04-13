import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Assets
import facebookSrc from './icons/facebook-icon.svg';
import pinterestSrc from './icons/pinterest-icon.svg';
import twitterSrc from './icons/twitter-icon.svg';

// Components
import StyledSocialBtn from './SocialBtn';

/**
 *
 * Properties
 *
 * facebook, twitter, pinterest: (string)
 *   - Each of these props is a redirect to share the product on a respective location.
 *
 */

function SocialBtns({
  className, facebookRedirect, twitterRedirect, pinterestRedirect,
}) {
  return (
    <div className={className}>
      <StyledSocialBtn src={facebookSrc} alt="Facebook icon" redirect={facebookRedirect} />
      <StyledSocialBtn src={twitterSrc} alt="Twitter icon" redirect={twitterRedirect} />
      <StyledSocialBtn src={pinterestSrc} alt="Pinterest icon" redirect={pinterestRedirect} />
    </div>
  );
}

const StyledSocialBtns = styled(SocialBtns)`
  display: inline-flex;
  gap: 20px;
`;

SocialBtns.propTypes = {
  className: propTypes.string.isRequired,
  facebookRedirect: propTypes.string.isRequired,
  twitterRedirect: propTypes.string.isRequired,
  pinterestRedirect: propTypes.string.isRequired,
};

export default StyledSocialBtns;
