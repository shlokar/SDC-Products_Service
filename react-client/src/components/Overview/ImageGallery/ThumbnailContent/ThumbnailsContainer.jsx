import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Assets
import useTracker from './useTracker';

// Components
import StyledThumbnail from './Thumbnail.jsx';
import { StyledUpArrow, StyledDownArrow } from '../Arrows.jsx';
import ThumbnailContainer from './ThumbnailContainer.jsx';

const StyledContainer = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  ${({ riseHeight }) => `top: -${riseHeight}px;`}
  transition: all 1s;
`;

const StyledDiv = styled.div`
  position: relative;
  height: ${({ height }) => height}px;
  width: 70px;
  overflow: hidden;
`;

function ThumbnailsContainer({
  className, imagesArr, clickHandler, selectedImg,
}) {
  const [tracker] = useState(useTracker(imagesArr, 7));
  const [selectedThumbnail, setSelectedThumbnail] = useState(selectedImg);
  const [riseHeight, setRiseHeight] = useState(0);

  const getIndexInImagesArr = (image) => {
    let index;

    for (let i = 0; i < imagesArr.length; i++) {
      if (image.id === imagesArr[i].id) {
        index = i;
      }
    }

    return index;
  };

  const goToNextImg = () => {
    const newIndex = getIndexInImagesArr(selectedThumbnail) + 1;
    setSelectedThumbnail(tracker.arr[newIndex]);
  };

  const goToPrevImg = () => {
    const newIndex = getIndexInImagesArr(selectedThumbnail) - 1;
    setSelectedThumbnail(tracker.arr[newIndex]);
  };

  const tnailHeight = 92;

  useEffect(() => {
    clickHandler(selectedThumbnail);
  }, [selectedThumbnail]);

  return (
    <div className={className}>
      <StyledUpArrow
        clickHandler={() => {
          goToPrevImg();
          if (selectedThumbnail.index - 1 < tracker.tracker.firstItemIndex) {
            setRiseHeight(tnailHeight * ((tracker.tracker.firstItemIndex - 1)));
            tracker.trackPrevItem();
          }
        }}
        visible={selectedThumbnail.id !== imagesArr[0].id}
      />
      <StyledDiv
        height={imagesArr.length >= 7 ? tnailHeight * 7 - 15 : tnailHeight * imagesArr.length - 15}
      >
        <StyledContainer riseHeight={riseHeight}>
          {tracker.arr.map((image) => (
            <ThumbnailContainer key={image.id} selected={image.id === selectedThumbnail.id}>
              <StyledThumbnail
                image={image}
                clickHandler={(img) => setSelectedThumbnail(img)}
              />
            </ThumbnailContainer>
          ))}
        </StyledContainer>
      </StyledDiv>
      <StyledDownArrow
        clickHandler={() => {
          goToNextImg();
          if (selectedThumbnail.index + 1 > tracker.tracker.lastItemIndex) {
            setRiseHeight(tnailHeight * ((tracker.tracker.lastItemIndex + 1) - 6));
            tracker.trackNextItem();
          }
        }}
        visible={selectedThumbnail.id !== imagesArr[imagesArr.length - 1].id}
      />
    </div>
  );
}

const StyledThumbnailsContainer = styled(ThumbnailsContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

ThumbnailsContainer.propTypes = {
  className: propTypes.string.isRequired,
  imagesArr: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
  })).isRequired,
  clickHandler: propTypes.func.isRequired,
  selectedImg: propTypes.shape({
    id: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    index: propTypes.number.isRequired,
  }).isRequired,
};

export default StyledThumbnailsContainer;
