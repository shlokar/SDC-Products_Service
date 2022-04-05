import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import checkSrc from './checkmark.svg';

function CheckMarkImg({ className }) {
  return <img className={className} src={checkSrc} alt="Selected item checkmark" />;
}

const StyledCheckMarkImg = styled(CheckMarkImg)`
  box-sizing: border-box;
  object-fit: cover;
  height: 20px;
  width: 20px;
`;

CheckMarkImg.propTypes = {
  className: propTypes.string.isRequired,
};

function CheckMarkCircle({ className }) {
  return (
    <div className={className}>
      <StyledCheckMarkImg />
    </div>
  );
}

const StyledCheckMarkCircle = styled(CheckMarkCircle)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  border: 2px solid black;
  border-radius: 50%;
  background-color: var(--clr-white);
  height: 20px;
  width: 20px;
`;

CheckMarkCircle.propTypes = {
  className: propTypes.string.isRequired,
};

function ThumbnailImg({ className, src, alt }) {
  return <img className={className} src={src} alt={alt} />;
}

const StyledThumbnailImg = styled(ThumbnailImg)`
  box-sizing: border-box;
  position: absolute;
  display: block;
  border: 2px solid black;
  border-radius: 50%;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

ThumbnailImg.propTypes = {
  className: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};

function Thumbnail({
  className, src, alt, selected,
}) {
  return (
    <div className={className}>
      <StyledThumbnailImg src={src} alt={alt} />
      {selected && <StyledCheckMarkCircle />}
    </div>
  );
}

const StyledThumbnail = styled(Thumbnail)`
  position: relative;
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

Thumbnail.propTypes = {
  className: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  selected: propTypes.bool.isRequired,
};

export default StyledThumbnail;
