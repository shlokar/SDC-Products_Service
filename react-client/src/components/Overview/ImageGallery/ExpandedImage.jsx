import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledInput = styled.input`
  position: absolute;
  box-sizing: border-box;
  object-fit: cover;
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  cursor: zoom-out;
`;

function ExpandedImage({
  className, src, alt, clickHandler,
}) {
  return (
    <div tabIndex="0" role="button" className={className} onClick={() => clickHandler()} onKeyDown={() => clickHandler()}>
      <StyledInput id="expanded-img" type="image" src={src} alt={alt} />
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
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  ${({ visible }) => visible && `
  visibility: visible;
  opacity: 1;
  `}
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: all .4s;
  cursor: zoom-out;
  backdrop-filter: blur(10px);
`;

export default StyledExpandedImage;
