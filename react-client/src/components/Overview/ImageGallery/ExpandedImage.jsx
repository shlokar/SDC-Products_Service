import React, { useState, createRef } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledInput = styled.input`
  width: 100%;
  object-fit: cover;
  cursor: zoom-in;
  ${({ isScaled }) => isScaled && 'cursor: crosshair;'}
  ${({ isScaled }) => isScaled && 'transform: scale(3);'}
  transform-origin: ${({ isScaled, x, y }) => isScaled && `${x}% ${y}%`};
  transition: 1s all;
`;

const StyledContainer = styled.div`
  display: flex;
  position: absolute;
  width: 60%;
  ${({ isScaled }) => isScaled && 'width: 70%;'}
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  overflow: hidden;
  transition: all 1s;
`;

function ExpandedImage({
  className, src, alt, clickHandler,
}) {
  const [isScaled, setIsScaled] = useState(false);
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const node = createRef();

  return (
    <div className={className}>
      <StyledContainer
        ref={node}
        isScaled={isScaled}
        xAxis={xAxis}
        yAxis={yAxis}
        onMouseMove={(e) => {
          if (isScaled) {
            const data = node.current.getBoundingClientRect();

            const offsetX = e.nativeEvent.layerX;
            const offsetY = e.nativeEvent.layerY;
            const xPercent = Math.ceil(((offsetX / data.width) * 100));
            const yPercent = Math.ceil((offsetY / data.height) * 100);
            setXAxis(xPercent);
            setYAxis(yPercent);
          }
        }}
      >
        <StyledInput
          isScaled={isScaled}
          type="image"
          x={xAxis}
          y={yAxis}
          src={src}
          alt={alt}
          onClick={() => {
            if (!isScaled) {
              setIsScaled(true);
            } else {
              setIsScaled(false);
              clickHandler();
            }
          }}
        />
      </StyledContainer>
    </div>
  );
}

ExpandedImage.propTypes = {
  className: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
};

const StyledExpandedImage = styled(ExpandedImage)`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
`;

export default StyledExpandedImage;
