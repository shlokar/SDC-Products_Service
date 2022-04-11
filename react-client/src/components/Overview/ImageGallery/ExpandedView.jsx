import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Assets
import { GalleryContext } from './ImageGalleryContext';

// Components
import StyledExpandedImage from './ExpandedImage';
import { StyledLeftArrow, StyledRightArrow } from './Arrows';
import StyledAnimateImg from './AnimateImg';
import StyledIconList from './IconList';
import StyledCloseBtn from './CloseBtn';

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

const CloseBtnContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 999;
  visibility: visible;
  opacity: 1;
  ${({ isVisible }) => !isVisible && `
  opacity: 0;
  visibility: hidden;
  `}
  transition: all 1s;
`;

const IconListContainer = styled.div`
  position: absolute;
  bottom: 50px;
  z-index: 999;
  visibility: visible;
  opacity: 1;
  ${({ isVisible }) => !isVisible && `
  opacity: 0;
  visibility: hidden;
  `}
  transition: all 1s;
`;

function ExpandedView({ className }) {
  const {
    imgsArr,
    currImg,
    setCurrImg,
    goToNextImg,
    goToPrevImg,
    setExpandedViewVisible,
    firstImgIsSelected,
    lastImgIsSelected,
  } = useContext(GalleryContext);
  const [isScaled, setIsScaled] = useState(false);

  return (
    <div className={className}>
      <CloseBtnContainer isVisible={!isScaled}>
        <StyledCloseBtn clickHandler={() => setExpandedViewVisible(false)} />
      </CloseBtnContainer>
      <LeftArrowContainer>
        <StyledLeftArrow
          isVisible={!firstImgIsSelected() && !isScaled}
          clickHandler={() => goToPrevImg()}
        />
      </LeftArrowContainer>
      {imgsArr.map((img) => (
        <StyledAnimateImg key={img.id} selected={currImg.id === img.id}>
          <StyledExpandedImage
            isScaled={isScaled}
            setIsScaled={(bool) => setIsScaled(bool)}
            src={img.url}
            alt="#"
            clickHandler={() => setIsScaled(false)}
          />
        </StyledAnimateImg>
      ))}
      <RightArrowContainer>
        <StyledRightArrow
          isVisible={!lastImgIsSelected() && !isScaled}
          clickHandler={() => goToNextImg()}
        />
      </RightArrowContainer>
      <IconListContainer isVisible={!isScaled}>
        <StyledIconList
          imgs={imgsArr}
          selectedImg={currImg}
          setSelectedImg={(img) => setCurrImg(img)}
        />
      </IconListContainer>
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
