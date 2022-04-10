import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Components
import StyledExpandedImage from './ExpandedImage';
import { StyledLeftArrow, StyledRightArrow } from './Arrows';

const ArrowContainer = styled.div`
  position: absolute;
  margin: 50px;
`;

const LeftArrowContainer = styled(ArrowContainer)`
  left: 0;
`;

const RightArrowContainer = styled(ArrowContainer)`
  right: 0;
`;

function ExpandedView({
  className, img, clickHandler, goToNextImg, goToPrevImg,
}) {
  return (
    <div className={className}>
      <LeftArrowContainer>
        <StyledLeftArrow isVisible clickHandler={() => goToPrevImg()} />
      </LeftArrowContainer>
      <StyledExpandedImage
        src={img.url}
        alt="#"
        clickHandler={() => clickHandler()}
      />
      <RightArrowContainer>
        <StyledRightArrow isVisible clickHandler={() => goToNextImg()} />
      </RightArrowContainer>
    </div>
  );
}

ExpandedView.propTypes = {
  className: propTypes.string.isRequired,
  img: propTypes.shape({
    id: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    index: propTypes.number.isRequired,
  }).isRequired,
  clickHandler: propTypes.func.isRequired,
  goToNextImg: propTypes.func.isRequired,
  goToPrevImg: propTypes.func.isRequired,
};

const StyledExpandedView = styled(ExpandedView)`
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  width: 100%;
  ${({ isVisible, viewWidth }) => isVisible && `
  visibility: visible;
  opacity: 1;
  width: ${viewWidth}px;
  `}
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
  transition: all .4s;
  // background-color: red;
  background-color: var(--clr-soft-peach);
`;

export default StyledExpandedView;
