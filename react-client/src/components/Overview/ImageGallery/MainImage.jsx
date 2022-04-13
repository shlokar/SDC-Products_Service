import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledImg = styled.img`
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  width: 70%;
  cursor: zoom-in;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

function MainImage({
  className, src, alt, clickHandler,
}) {
  return (
    <div className={className}>
      <StyledImg src={src} alt={alt} onClick={() => clickHandler()} />
    </div>
  );
}

MainImage.propTypes = {
  className: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
};

const StyledMainImage = styled(MainImage)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export default StyledMainImage;
