import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Assets
import { GalleryProvider, GalleryContext } from './ImageGalleryContext';

// Components
import StyledThumbnailsContainer from './ThumbnailContent/ThumbnailsContainer';
import StyledMainImage from './MainImage';
import StyledExpandedView from './ExpandedView';
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

const getDim = () => (window.innerWidth < 1400 ? window.innerWidth : 1400);

function ImageGalleryContainer({ data }) {
  const [expandedImgWidth, setExpandedImgWidth] = useState(getDim());

  useEffect(() => {
    window.addEventListener('resize', () => {
      const dim = getDim();
      setExpandedImgWidth(dim);
    });
  }, []);

  return (
    <GalleryProvider newData={{ data, expandedImgWidth }}>
      <StyledImageGallery />
    </GalleryProvider>
  );
}

ImageGalleryContainer.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    thumbnail_url: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
  })).isRequired,
};

function ImageGallery({ className }) {
  const {
    currImg,
    setCurrImg,
    imgsArr,
    goToNextImg,
    goToPrevImg,
    expandedViewVisible,
    setExpandedViewVisible,
    firstImgIsSelected,
    lastImgIsSelected,
    expandedImgWidth,
  } = useContext(GalleryContext);

  return (
    <div className={className}>
      <StyledExpandedView
        isVisible={expandedViewVisible}
        viewWidth={expandedImgWidth}
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
            <StyledLeftArrow
              isVisible={!firstImgIsSelected()}
              clickHandler={() => goToPrevImg()}
            />
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
              isVisible={!lastImgIsSelected()}
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
};

export default ImageGalleryContainer;
