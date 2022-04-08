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
  const tnailHeight = 92;
  const tracker = useTracker(imagesArr, 7);
  const [selectedThumbnail, setSelectedThumbnail] = useState(selectedImg);
  const [riseHeight, setRiseHeight] = useState(0);

  const goToNextImg = () => {
    const newIndex = selectedThumbnail.index + 1;
    setSelectedThumbnail(tracker.arr[newIndex]);
  };

  const goToPrevImg = () => {
    const newIndex = selectedThumbnail.index - 1;
    setSelectedThumbnail(tracker.arr[newIndex]);
  };

  const lowerImgsContainer = (startingIndex) => {
    const index = startingIndex || selectedThumbnail.index;
    if (index - 1 < tracker.firstItemIndex) {
      setRiseHeight(tnailHeight * ((tracker.firstItemIndex - 1)));
      tracker.trackPrevItem();
    }
  };

  const riseImgsContainer = (startingIndex) => {
    const index = startingIndex || selectedThumbnail.index;
    if (index + 1 > tracker.lastItemIndex) {
      setRiseHeight(tnailHeight * ((tracker.lastItemIndex + 1) - 6));
      tracker.trackNextItem();
    }
  };

  useEffect(() => {
    lowerImgsContainer(selectedThumbnail.index + 1);
    riseImgsContainer(selectedThumbnail.index - 1);
    clickHandler(selectedThumbnail);
  }, [selectedThumbnail]);

  useEffect(() => {
    setSelectedThumbnail(selectedImg);
  }, [selectedImg]);

  return (
    <div className={className}>
      <StyledUpArrow
        clickHandler={() => {
          goToPrevImg();
          lowerImgsContainer();
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
          riseImgsContainer();
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
