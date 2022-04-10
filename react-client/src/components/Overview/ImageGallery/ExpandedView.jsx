import React, { useContext } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Assets
import { GalleryContext } from './ImageGalleryContext';

// Components
import StyledExpandedImage from './ExpandedImage';
import { StyledLeftArrow, StyledRightArrow } from './Arrows';
import StyledAnimateImg from './AnimateImg';

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

function ExpandedView({ className }) {
  const {
    imgsArr,
    currImg,
    goToNextImg,
    goToPrevImg,
    setExpandedViewVisible,
    firstImgIsSelected,
    lastImgIsSelected,
  } = useContext(GalleryContext);

  return (
    <div className={className}>
      <LeftArrowContainer>
        <StyledLeftArrow isVisible={!firstImgIsSelected()} clickHandler={() => goToPrevImg()} />
      </LeftArrowContainer>
      {imgsArr.map((img) => (
        <StyledAnimateImg key={img.id} selected={currImg.id === img.id}>
          <StyledExpandedImage
            src={img.url}
            alt="#"
            clickHandler={() => setExpandedViewVisible(false)}
          />
        </StyledAnimateImg>
      ))}
      <RightArrowContainer>
        <StyledRightArrow isVisible={!lastImgIsSelected()} clickHandler={() => goToNextImg()} />
      </RightArrowContainer>
    </div>
  );
}

ExpandedView.propTypes = {
  className: propTypes.string.isRequired,
};

const StyledExpandedView = styled(ExpandedView)`
  z-index: 0;
  visibility: hidden;
  opacity: 0;
  width: 100%;
  ${({ isVisible, viewWidth }) => isVisible && `
  z-index: 999;
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
