import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import uniqid from 'uniqid';

// Assets
import useTracker from './ThumbnailContent/useTracker';

// Components
import StyledThumbnailsContainer from './ThumbnailContent/ThumbnailsContainer';
import StyledMainImage from './MainImage';
import StyledExpandedImage from './ExpandedImage';
import StyledAnimateImg from './AnimateImg';
import { StyledLeftArrow, StyledRightArrow } from './Arrows';

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

const LeftDiv = styled.div`
  z-index: 2;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const StyledArrowPadding = styled.div`
  ${({ left }) => left && 'margin-left: 20px;'}
  ${({ right }) => right && 'margin-right: 20px;'}
`;

const updateImgsArr = (arr) => {
  const arrCopy = arr.map((obj) => {
    const newObj = { ...obj };
    newObj.id = uniqid();
    newObj.alt = '#';
    return newObj;
  });

  return useTracker(arrCopy).arr;
};

function ImageGallery({ className, data, expandedImgWidth }) {
  const [imgsArr] = useState(updateImgsArr(data));
  const [currImg, setCurrImg] = useState(imgsArr[0]);
  const [expandedViewVisible, setExpandedViewVisible] = useState(false);

  const goToPrevImg = () => {
    if (currImg.index > 0) {
      const prevImg = imgsArr[currImg.index - 1];
      setCurrImg(prevImg);
    }
  };

  const goToNextImg = () => {
    if (currImg.index + 1 < imgsArr.length) {
      const nextImg = imgsArr[currImg.index + 1];
      setCurrImg(nextImg);
    }
  };

  return (
    <div className={className}>
      <StyledExpandedImage
        src={currImg.url}
        alt="#"
        clickHandler={() => setExpandedViewVisible(false)}
        visible={expandedViewVisible}
        width={expandedImgWidth}
      />
      <StyledContainer>
        <LeftDiv>
          <StyledThumbnailsContainer
            imagesArr={imgsArr}
            clickHandler={(img) => setCurrImg(img)}
            selectedImg={currImg}
          />
        </LeftDiv>
        <RightDiv>
          <StyledArrowPadding left>
            <StyledLeftArrow isVisible={currImg.index !== 0} clickHandler={() => goToPrevImg()} />
          </StyledArrowPadding>
          <ImgContainer>
            {imgsArr.map((image) => (
              <StyledAnimateImg key={image.id} selected={currImg.id === image.id}>
                <StyledMainImage
                  src={image.url}
                  alt="#"
                  clickHandler={() => setExpandedViewVisible(true)}
                />
              </StyledAnimateImg>
            ))}
          </ImgContainer>
          <StyledArrowPadding right>
            <StyledRightArrow
              isVisible={currImg.index !== imgsArr.length - 1}
              clickHandler={() => goToNextImg()}
            />
          </StyledArrowPadding>
        </RightDiv>
      </StyledContainer>
    </div>
  );
}

const StyledImageGallery = styled(ImageGallery)`
  position: relative;
  box-sizing: border-box;
  height: 800px;
  width: 900px;
  background-color: var(--clr-soft-peach);
  padding: 20px;
`;

ImageGallery.propTypes = {
  className: propTypes.string.isRequired,
  data: propTypes.arrayOf(propTypes.shape({
    thumbnail_url: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
  })).isRequired,
  expandedImgWidth: propTypes.number.isRequired,
};

export default StyledImageGallery;
