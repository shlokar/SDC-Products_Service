import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

/**
 *
 * Properties
 *
 * src: (string)
 *   - The image you want to be the SocialBtn.
 *
 * alt: (string)
 *   - The alternative text that will appear if the img doesn't.
 *
 * redirect: (string)
 *   - the location the page will redirect to when the Social btn is clicked.
 *
 */

function SocialBtn({
  className, src, alt, redirect,
}) {
  return (
    <a href={redirect} target="_blank" rel="noreferrer">
      <img className={className} src={src} alt={alt} />
    </a>
  );
}

const StyledSocialBtn = styled(SocialBtn)`
  display: block;
  width: 35px;
  height: 35px;
  object-fit: cover;
`;

SocialBtn.propTypes = {
  className: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  redirect: propTypes.string.isRequired,
};

export default StyledSocialBtn;
