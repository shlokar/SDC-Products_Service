import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import uniqid from 'uniqid';

// Assets
import useTracker from './ThumbnailContent/useTracker';

// Components
import StyledThumbnailsContainer from './ThumbnailContent/ThumbnailsContainer.jsx';
import StyledMainImage from './MainImage.jsx';
import StyledExpandedImage from './ExpandedImage.jsx';
import StyledAnimateImg from './AnimateImg.jsx';

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

const LeftDiv = styled.div`
`;

const RightDiv = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const createCustomImgsArr = (arr) => {
  const arrCopy = arr.map((obj) => {
    const newObj = { ...obj };
    newObj.id = uniqid();
    newObj.alt = '#';
    return newObj;
  });

  return useTracker(arrCopy).arr;
};

function ImageGallery({ className, data }) {
  const [customImgsArr] = useState(createCustomImgsArr(data));
  const [currImg, setCurrImg] = useState(customImgsArr[0]);
  const [expandedViewVisible, setExpandedViewVisible] = useState(false);

  return (
    <div className={className}>
      <StyledExpandedImage src={currImg.url} alt="#" clickHandler={() => setExpandedViewVisible(false)} visible={expandedViewVisible} />
      <StyledContainer>
        <LeftDiv>
          <StyledThumbnailsContainer
            imagesArr={customImgsArr}
            clickHandler={(img) => setCurrImg(img)}
          />
        </LeftDiv>
        <RightDiv>
          {customImgsArr.map((image) => (
            <StyledAnimateImg key={image.id} selected={currImg.id === image.id}>
              <StyledMainImage
                src={image.url}
                alt="#"
                clickHandler={() => setExpandedViewVisible(true)}
              />
            </StyledAnimateImg>
          ))}
        </RightDiv>
      </StyledContainer>
    </div>
  );
}

const StyledImageGallery = styled(ImageGallery)`
  position: relative;
  box-sizing: border-box;
  height: 800px;
  width: 1000px;
  background-color: #EDEFF0;
  padding: 20px;
`;

ImageGallery.propTypes = {
  className: propTypes.string.isRequired,
  data: propTypes.arrayOf(propTypes.shape({
    thumbnail_url: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
  })).isRequired,
};

export default StyledImageGallery;
