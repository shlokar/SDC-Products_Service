import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledInput = styled.input`
  box-sizing: border-box;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  cursor: zoom-in;
  width: 100%;
`;

const StyledContainer = styled.div`
  position: absolute;
  width: 60%;
  overflow: hidden;
`;

function ExpandedImage({
  className, src, alt, clickHandler,
}) {
  return (
    <div className={className}>
      <StyledContainer>
        <StyledInput type="image" src={src} alt={alt} onClick={() => clickHandler()} />
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
